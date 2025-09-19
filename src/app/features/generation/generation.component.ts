import { Component } from '@angular/core';
import { DOMAINS, ONBOARDED_PLATFORMS, STANDARDS } from '../../shared/config/domain-standards.map';
import { StandardOption } from '../../shared/models/generation.models';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-generation',
  imports: [CommonModule,AutoCompleteModule, FormsModule, ReactiveFormsModule, MultiSelectModule],
  templateUrl: './generation.component.html',
  styleUrl: './generation.component.scss'
})
export class GenerationComponent {
domains = DOMAINS;
  standards = STANDARDS;
  onboarded = ONBOARDED_PLATFORMS;

  selectedDomain?: string;
  domainMappedStandards = [] as StandardOption[];
  selectedStandards: string[] = [];

  selectedPlatformId?: string;
  projects: { id: string; name: string; }[] = [];
  selectedProjectId?: string;
  selectedPlatform: any;
  selectedProject: any;

  getStandardsForDomain() {
    if (!this.selectedDomain) return [];
    return this.standards.filter(s => s.domainIds.includes(this.selectedDomain|| ''));
  }

  getProjectsForPlatform() {
    return this.selectedPlatform?.projects || [];
  }
}