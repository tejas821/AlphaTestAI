// shared/config/charts.config.ts
import { ChartWidget } from '../models/ui.models';

export const DASHBOARD_CHARTS: ChartWidget[] = [
  {
    type: 'doughnut',
    title: 'Coverage by Category',
    subtitle: 'AI auto functional coverage',
    data: {
      labels: ['Smoke', 'Regression', 'Integration', 'E2E'],
      datasets: [
        {
          data: [85, 70, 65, 60],
          backgroundColor: ['#34d399', '#60a5fa', '#fbbf24', '#f472b6']
        }
      ]
    },
    options: {
      cutout: '60%',
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  },
  {
    type: 'bar',
    title: 'Compliance by Domain',
    data: {
      labels: ['Healthcare', 'FinTech', 'Manufacturing', 'Retail'],
      datasets: [
        {
          label: 'Compliance %',
          data: [92, 84, 78, 80],
          backgroundColor: '#6366f1'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  },
  {
    type: 'line',
    title: 'AI Generation Throughput',
    subtitle: 'Cases generated per week',
    data: {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
      datasets: [
        {
          label: 'Cases',
          data: [120, 160, 180, 210, 240, 260],
          borderColor: '#22c55e',
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: true }
      }
    }
  }
];
