import { Component } from '@angular/core';
@Component({
  standalone: true,
  template: `
    <h2>Notifications</h2>
    <div class="bb-card" style="margin-top:12px; padding:16px; display:grid; gap:12px;">
      <div class="note">
        <strong>Your order has been delivered.</strong>
        <div class="muted">Click to view more.</div>
      </div>
      <div class="note">
        <strong>Someone liked your review.</strong>
        <div class="muted">Crossbody bag by DONA.</div>
      </div>
    </div>
  `
})
export class NotificationsPage {}
