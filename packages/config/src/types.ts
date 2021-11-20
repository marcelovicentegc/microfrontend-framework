export interface AppConfig {
  basePath: string;
  items: SidebarConfigTemplate[];
}

export interface SidebarConfigTemplate {
  route: string;
  title: string;
  pageName: string;
}
