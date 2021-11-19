import { Command } from "@oclif/command";
import * as pacote from "pacote";
import { builders } from "../clients";

const APP_PATH = "./";

export default class Install extends Command {
  static description = "installs a published mf-app on a tenant";

  static examples = [`$ npx @mf-framework/cli install`];

  static args = [
    {
      name: "tenant",
      required: false,
      description: "output file",
      default: "glowing-fiesta",
      options: ["glowing-fiesta", "vigilant-octo-sniffle", "redesigned-robot"],
    },
  ];

  async run() {
    const { args } = this.parse(Install);

    const manifest = await pacote.manifest(APP_PATH);

    await builders.post("/patch-tenant", {
      data: {
        app: `${manifest.name}@${manifest.version}`,
        tenant: args.tenant,
      },
    });

    try {
    } catch (error) {
      throw error;
    }
  }
}
