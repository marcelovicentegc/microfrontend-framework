export interface AppConfig {
  items: SidebarConfigTemplate[];
}

export interface SidebarConfigTemplate {
  route: string;
  title: string;
  pageName: string;
}
