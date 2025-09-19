//ui.config.ts
import { NavItem, TopbarConfig, StatCard } from '../models/ui.models';

export const SIDENAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard', dataTestId: 'nav-dashboard' },
  { label: 'Integrity / Platform Integration', icon: 'pi pi-sitemap', route: '/integration', dataTestId: 'nav-integration' },
  { label: 'Test Case Generation', icon: 'pi pi-list-check', route: '/generation', dataTestId: 'nav-generation' }
];

export const TOPBAR_CONFIG: TopbarConfig = {
  productName: 'sigma wolves',
  userMenu: {
    label: 'Profile',
    items: [
      { label: 'Logout', id: 'logout', icon: 'pi pi-sign-out' }
    ]
  }
};

export const DASHBOARD_STAT_CARDS: StatCard[] = [
  { title: 'Total Test Cases', icon: 'pi pi-database', value: 1342, dataTestId: 'stat-total' },
  { title: 'Compliance % (Overall)', icon: 'pi pi-shield', value: 87, suffix: '%', help: 'Across domains & categories', dataTestId: 'stat-compliance' },
  { title: 'Domains Covered', icon: 'pi pi-th-large', value: 6, dataTestId: 'stat-domains' },
  { title: 'AI Coverage Index', icon: 'pi pi-bolt', value: 72, suffix: '%', help: 'Auto functional coverage index', dataTestId: 'stat-ai-coverage' }
];
