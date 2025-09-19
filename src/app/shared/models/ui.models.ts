//ui.models.ts
export interface NavItem {
  label: string;
  icon?: string;
  route?: string;
  items?: NavItem[];
  dataTestId?: string;
}
export interface TopbarConfig {
  productName: string;
  userMenu: {
    label: string;
    items: { label: string; id: string; icon?: string }[];
  };
}
export interface StatCard {
  title: string;
  icon: string;
  value: string | number;
  suffix?: string;
  help?: string;
  dataTestId?: string;
}
export interface ChartWidget {
  type: any;
  options?: any;
  title?: string;
  subtitle?: string;
  data?:any;
}
