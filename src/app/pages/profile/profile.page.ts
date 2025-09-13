import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <div class="bb-card profile">
      <div class="header">
        <div class="avatar">Y</div>
        <div>
          <h2>Your Profile</h2>
          <div class="muted">Your account is 80% complete. Fill in your profile →</div>
        </div>
      </div>

      <div class="grid">
        <a routerLink="/profile" class="row">⚙️ Account Settings</a>
        <a routerLink="/profile" class="row">🔐 Security</a>
        <a routerLink="/chat" class="row">🛟 Help Center</a>
        <a routerLink="/brand/dashboard" class="row">🏷️ Switch Account</a>
      </div>

      <button class="bb-button ghost" style="margin-top:10px;">Log out</button>
    </div>
  `,
  styles:[`
    .profile { padding: 16px; display:grid; gap: 12px; }
    .header { display:flex; gap: 14px; align-items:center; }
    .avatar { width:56px; height:56px; display:grid; place-items:center; border-radius:50%; background:#1a1d2a; border:1px solid #2b2f40; }
    .grid { display:grid; gap: 10px; margin-top: 8px; }
    .row { padding: 12px; border-radius: 12px; border:1px solid var(--bb-border); background: #12131b; }
  `],
  imports:[RouterLink]
})
export class ProfilePage {}
