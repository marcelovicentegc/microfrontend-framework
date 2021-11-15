import { Command } from "@oclif/command";
import * as Zip from "adm-zip";
import { builders } from "../clients";

export default class Publish extends Command {
  static description = "creates a new mf-app";

  static examples = [`$ npx @mf-framework/cli publish`];

  async run() {
    const zip = new Zip();
    zip.addLocalFolder("./");

    const data = zip.toBuffer();

    try {
      await builders.post("/build-app", {
        data,
      });
    } catch (error) {
      throw error;
    }
  }
}
