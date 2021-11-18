import { Command } from "@oclif/command";
import * as pacote from "pacote";
import * as fs from "fs";
import { registry } from "../clients";

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
    const appConfig = fs.readFileSync("./mf-config.ts", { encoding: "utf-8" });

    const newPatch = patch(manifest.version);
    manifest.version = newPatch;

    fs.writeFileSync("./package.json", JSON.stringify(manifest));

    try {
      this.log(`Publishing ${manifest.name}@${manifest.version}...`);

      await registry.post("/publish", {
        data: {
          tarData,
          manifest,
          appConfig,
        },
      });

      this.log(`Successfully published ${manifest.name}@${manifest.version}`);
    } catch (error) {
      throw error;
    }
  }
}
