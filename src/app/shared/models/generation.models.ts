//generation.models.ts
export interface DomainOption {
  id: string;
  name: string;
}
export interface StandardOption {
  id: string;
  name: string;
  domainIds: string[];
}
export interface OnboardedPlatform {
  id: string;
  name: string;
  projects: { id: string; name: string }[];
}
