import { Command } from "@oclif/command";
import { registry } from "../clients";
import * as pacote from "pacote";

const APP_PATH = "./";

function patch(version: string) {
  return `0.0.${Number(version.substr(version.lastIndexOf(".") + 1)) + 1}`;
}

export default class Publish extends Command {
  static description = "creates a new mf-app";

  static examples = [`$ npx @mf-framework/cli publish`];

  async run() {
    // TODO: Before packing and sending to registry, validate it with @mf-framework/mf-app-config.
    // TODO: Add patch, minor and major options.

    const manifest = await pacote.manifest(APP_PATH);
    const tarData = await pacote.tarball(APP_PATH);

    manifest.version = patch(manifest.version);

    try {
      await registry.post("/publish", {
        manifest,
        tarData,
      });
    } catch (error) {
      throw error;
    }
  }
}
