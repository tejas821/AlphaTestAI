import { Component } from '@angular/core';
import { DASHBOARD_STAT_CARDS } from '../../shared/config/ui.config';
import { DASHBOARD_CHARTS } from '../../shared/config/charts.config';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CardModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
statCards = DASHBOARD_STAT_CARDS;
  charts = DASHBOARD_CHARTS;

  metrics = [
  { label: 'Total Test Cases', value: 1342, unit: '', delta: 2.4, subtext: 'vs last week' },
  { label: 'Compliance %', value: 87, unit: '%', delta: -1.2, subtext: 'overall' },
  { label: 'Domains Covered', value: 6, unit: '', delta: 0.0, subtext: 'active' },
  { label: 'AI Coverage', value: 72, unit: '%', delta: 4.8, subtext: 'auto gen' },
  { label: 'New Cases', value: 210, unit: '', delta: 6.1, subtext: 'this week' },
  { label: 'Fail Ratio', value: 3.2, unit: '%', delta: -0.6, subtext: 'last 24h' },
  { label: 'Avg Time', value: 1.8, unit: 'h', delta: -3.3, subtext: 'per run' },
  { label: 'Flaky Tests', value: 12, unit: '', delta: -2.0, subtext: '7d trend' }
];
}
