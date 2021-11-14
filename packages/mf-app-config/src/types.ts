export interface AppConfig {
  sidebar?: AppConfigSidebar[];
  topbar?: AppConfigTopbar[];
}

export type AppConfigSidebarSlots = "one" | "two" | "three" | "four";
export type AppConfigTopbarSlots = AppConfigSidebarSlots;

export interface AppConfigSidebar {
  slot: AppConfigSidebarSlots;
  path: string;
  title: string;
  componentName: string;
}

export interface AppConfigTopbar extends AppConfigSidebar {
  slot: AppConfigTopbarSlots;
}
