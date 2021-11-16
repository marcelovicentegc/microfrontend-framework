import { AppConfig } from "@mf-framework/mf-app-config";

export default {
  sidebar: [
    {
      slot: "one",
      path: "/mf-app-01",
      title: "NextJS App 01",
      componentName: "index",
    },
    {
      slot: "one",
      path: "/mf-app-01/another-page",
      title: "NextJS App 02",
      componentName: "another-page",
    },
  ],
} as AppConfig;
