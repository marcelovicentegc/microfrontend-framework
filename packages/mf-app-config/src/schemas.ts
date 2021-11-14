import { JSONSchemaType } from "ajv";
import { AppConfig } from "./types";

const commonSchema = {
  type: "object",
  nullable: true,
  properties: {
    slot: {
      type: "string",
    },
    path: {
      type: "string",
    },
    title: {
      type: "string",
    },
  },
  required: ["slot", "path", "title"],
};

export const appConfigSchema = {
  type: "object",
  anyOf: [
    {
      required: ["sidebar"],
    },
    {
      required: ["topbar"],
    },
  ],
  properties: {
    sidebar: commonSchema,
    topbar: commonSchema,
  },
} as JSONSchemaType<AppConfig>;
