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
}
