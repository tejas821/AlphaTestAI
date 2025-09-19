//integration.models.ts
export interface PlatformOption {
  id: string;
  name: string;
  icon?: string;
  requires: { apiKey?: boolean; oauth?: boolean };
  fields: {
    key: string;
    label: string;
    placeholder?: string;
    type?: "password" | "text";
  }[];
}
export interface Connection {
  platformId: string;
  apiKey?: string;
  projectId?: string;
  meta?: Record<string, any>;
}
