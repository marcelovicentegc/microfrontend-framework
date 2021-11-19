export interface AppConfig {
  [key: string]: SidebarConfigTemplate[];
}

export interface SidebarConfigTemplate {
  route: string;
  title: string;
}
