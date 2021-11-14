import { Command, flags } from "@oclif/command";
import { exec } from "child_process";
import cli from "cli-ux";
import * as inquirer from "inquirer";

export default class Create extends Command {
  static description = "creates a new mf-app";

  static examples = [`$ npx @mf-framework/cli create`];

  private static frameworkOptions = ["nextjs", "react"];
  static flags = {
    framework: flags.string({ options: this.frameworkOptions }),
  };

  async run() {
    const { flags } = this.parse(Create);
    let framework = flags.framework;

    const appName = await cli.prompt("What is the name of your app?");

    if (!framework) {
      let responses: any = await inquirer.prompt([
        {
          name: "framework",
          message: "What framework would you like to use?",
          type: "list",
          choices: Create.frameworkOptions.map((option) => ({ name: option })),
        },
      ]);
      framework = responses.framework;
    }

    this.log(`creating ${appName} mf app with ${framework}...`);

    exec(
      `git clone \
    --depth 1  \
    --filter=blob:none  \
    --sparse \
    git@github.com:marcelovicentegc/microfrontend-framework.git ${appName};
  cd ${appName}
  git sparse-checkout set ${framework}-template
  mv packages/templates/${framework}-template/** .
  rm -rf packages
  yarn`,
      (error, stdout, stderr) => {
        if (error) {
          this.error(`error: ${error.message}`);
        }
        if (stderr) {
          this.warn(`stderr: ${stderr}`);
          return;
        }

        this.log(`stdout: ${stdout}`);
      }
    );
  }
}
