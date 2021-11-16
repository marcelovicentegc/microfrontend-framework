import { Command } from "@oclif/command";
import * as Zip from "adm-zip";
import { registry } from "../clients";

export default class Publish extends Command {
  static description = "creates a new mf-app";

  static examples = [`$ npx @mf-framework/cli publish`];

  async run() {
    // TODO: Before packing and sending to registry, validate it with @mf-framework/mf-app-config.

    const zip = new Zip();
    zip.addLocalFolder("./");

    const data = zip.toBuffer();

    try {
      await registry.post("/build-app", {
        data,
      });
    } catch (error) {
      throw error;
    }
  }
}
