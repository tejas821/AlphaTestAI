import { Component } from '@angular/core';
import { ONBOARDED_CONNECTIONS, PLATFORM_OPTIONS } from '../../shared/config/platforms.config';
import { Connection, PlatformOption } from '../../shared/models/integration.models';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-integration',
  imports: [CommonModule,PanelModule, FormsModule, ReactiveFormsModule],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.scss'
})
export class IntegrationComponent {
platforms: PlatformOption[] = PLATFORM_OPTIONS;
  connections: any[] = ONBOARDED_CONNECTIONS;

  selectedPlatformId?: string;
  form: Record<string, any> = {};

  selectPlatform(id: string) {
    this.selectedPlatformId = id;
    this.form = {};
  }

  connect() {
    if (!this.selectedPlatformId) return;
    const existing = this.connections.find(c => c.platformId === this.selectedPlatformId);
    if (existing) Object.assign(existing, { ...this.form });
    else this.connections.push({ platformId: this.selectedPlatformId!, ...this.form });
  }
}