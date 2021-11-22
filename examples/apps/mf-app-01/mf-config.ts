import { AppConfig } from "@mf-framework/config";

export default {
  basePath: "/mf-app-01",
  items: [
    {
      route: "/",
      title: "NextJS App 01",
      pageName: "index.tsx",
    },
    {
      route: "/pricing",
      title: "NextJS App 02",
      pageName: "pricing.tsx",
    },
  ],
} as AppConfig;
