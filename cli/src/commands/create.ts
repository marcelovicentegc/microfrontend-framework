import { Command, flags } from "@oclif/command";
import { exec } from "child_process";
import cli from "cli-ux";
import * as inquirer from "inquirer";

const pocMap: { [key: string]: string } = {
  nrti: "nextjs-run-time-integration",
  nbti: "nextjs-build-time-integration",
};

function clone(appName: string, framework: string, poc: string) {
  cli.action.start(`Creating ${appName} mf app with ${framework}`);

  exec(
    `git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  git@github.com:marcelovicentegc/microfrontend-framework.git ${appName};
cd ${appName}
git sparse-checkout set ${framework}-template
mv ${pocMap[poc]}/packages/templates/${framework}-template/** .
rm -rf nextjs-*
rm -rf cli
rm -rf registry
yarn`,
    (error, _, stderr) => {
      if (error) {
        cli.error(`error: ${error.message}`);
      }
      if (stderr) {
        cli.warn(`stderr: ${stderr}`);
        return;
      }

      cli.action.stop(`Done ✨`);
    }
  );
}

export default class Create extends Command {
  static description = "creates a new mf-app";

  static examples = [`$ mf-framework-cli create`];

  private static frameworkOptions = ["nextjs", "react"];
  private static pocOptions = ["nrti", "nbti"];
  static flags = {
    poc: flags.string({
      options: Create.pocOptions,
      description:
        "the target POC: nextjs-run-time-integration (nrti) or nextjs-build-time-integration (nbti) ",
    }),
  };

  async run() {
    const { flags } = this.parse(Create);
    let framework = "nextjs";
    let poc = flags.poc;

    const appName = await cli.prompt("What is the name of your app?");

    if (!poc) {
      const responses: any = await inquirer.prompt([
        {
          name: "poc",
          message: "What POC would you like to try out?",
          type: "list",
          choices: Create.pocOptions.map((option) => ({ name: option })),
        },
      ]);
      poc = responses.framework;
    }

    switch (poc) {
      case "nbti":
        framework = await inquirer.prompt([
          {
            name: "framework",
            message: "What framework would you like to use?",
            type: "list",
            choices: Create.frameworkOptions.map((option) => ({
              name: option,
            })),
          },
        ]);
        break;
      default:
        break;
    }

    clone(appName, framework, poc as string);
  }
}
