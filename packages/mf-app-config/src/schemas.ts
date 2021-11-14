const commonSchema = {
  type: "array",
  nullable: true,
  minItems: 1,
  items: {
    type: "object",
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
      componentName: {
        type: "string",
      },
    },
    required: ["slot", "path", "title", "componentName"],
  },
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
};
