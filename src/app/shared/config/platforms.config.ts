// shared/config/platforms.config.ts
import { PlatformOption, Connection } from '../models/integration.models';

export const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: 'jira',
    name: 'JIRA',
    icon: 'pi pi-briefcase',
    requires: { apiKey: true },
    fields: [
      { key: 'baseUrl', label: 'Base URL', placeholder: 'https://your-domain.atlassian.net', type: 'text' },
      { key: 'apiEmail', label: 'API Email', placeholder: 'admin@company.com', type: 'text' },
      { key: 'apiToken', label: 'API Token', placeholder: '******', type: 'password' }
    ]
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    icon: 'pi pi-external-link',
    requires: { apiKey: true },
    fields: [
      { key: 'apiToken', label: 'API Token', placeholder: '******', type: 'password' }
    ]
  },
  {
    id: 'linear',
    name: 'Linear',
    icon: 'pi pi-bars',
    requires: { apiKey: true },
    fields: [
      { key: 'apiKey', label: 'API Key', placeholder: '******', type: 'password' }
    ]
  }
];

export const ONBOARDED_CONNECTIONS: Connection[] = [
  { platformId: 'jira', apiKey: '***', projectId: undefined },
  { platformId: 'clickup', apiKey: '***', projectId: undefined }
];
