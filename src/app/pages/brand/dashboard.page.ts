import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="bb-container" style="display:grid; gap: 16px;">
      <h2>Dashboard</h2>
      <div style="display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:12px;">
        <div class="bb-card kpi"><div>Total Revenue</div><strong>40,980 EGP</strong></div>
        <div class="bb-card kpi"><div>Ad Spend</div><strong>10,000 EGP</strong></div>
        <div class="bb-card kpi"><div>Total Visits</div><strong>656</strong></div>
        <div class="bb-card kpi"><div>Orders Placed</div><strong>428</strong></div>
      </div>
    </div>
  `,
  styles:[`
    .kpi { padding: 16px; display:grid; gap:6px; }
    .kpi strong { font-size: 22px; }
  `]
})
export class BrandDashboardPage {}
