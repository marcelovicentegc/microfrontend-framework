import { AppConfig } from "@mf-framework/mf-app-config";

export default {
  sidebar: [
    {
      slot: "one",
      path: "/my-app-nextjs",
      title: "My App NextJS",
      componentName: "index",
    },
  ],
} as AppConfig;
