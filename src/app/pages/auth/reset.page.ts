// src/app/pages/auth/reset.page.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth bb-card">
      <h1>Reset your password</h1>
      <label
        >New Password
        <input type="password" class="bb-input" [(ngModel)]="newPassword"
      /></label>
      <label
        >Confirm New Password
        <input
          type="password"
          class="bb-input"
          [(ngModel)]="confirmNewPassword"
      /></label>
      <button class="bb-button primary" (click)="reset()">Set Password</button>
    </div>
  `,
})
export class ResetPage {
  token = this.route.snapshot.queryParamMap.get('token') || '';
  newPassword = '';
  confirmNewPassword = '';
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  reset() {
    if (this.newPassword !== this.confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }
    this.loading = true;
    this.auth
      .resetPassword(this.token, this.newPassword, this.confirmNewPassword)
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        },
        error: (e) => {
          this.loading = false;
          alert(e.error?.message ?? 'Reset failed');
        },
      });
  }
}
