// shared/config/domain-standards.map.ts
import { DomainOption, StandardOption, OnboardedPlatform } from '../models/generation.models';

export const DOMAINS: DomainOption[] = [
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'fintech', name: 'FinTech' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'retail', name: 'Retail' }
];

export const STANDARDS: StandardOption[] = [
  { id: 'hipaa', name: 'HIPAA', domainIds: ['healthcare'] },
  { id: 'hl7', name: 'HL7', domainIds: ['healthcare'] },
  { id: 'pci', name: 'PCI-DSS', domainIds: ['fintech','retail'] },
  { id: 'sox', name: 'SOX', domainIds: ['fintech'] },
  { id: 'iso27001', name: 'ISO 27001', domainIds: ['healthcare','fintech','manufacturing','retail'] }
];

export const ONBOARDED_PLATFORMS: OnboardedPlatform[] = [
  {
    id: 'jira',
    name: 'JIRA',
    projects: [
      { id: 'JRA1', name: 'Core Platform' },
      { id: 'JRA2', name: 'Mobile App' }
    ]
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    projects: [
      { id: 'CU1', name: 'CX Revamp' },
      { id: 'CU2', name: 'ML Assist' }
    ]
  }
];
