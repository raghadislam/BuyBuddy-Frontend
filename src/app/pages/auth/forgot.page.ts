// src/app/pages/auth/forgot.page.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth bb-card">
      <h1>Forgot password</h1>
      <label>Email <input class="bb-input" [(ngModel)]="email" /></label>
      <button class="bb-button primary" (click)="submit()">
        Send reset email
      </button>
    </div>
  `,
})
export class ForgotPage {
  email = '';
  loading = false;
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    this.loading = true;
    this.auth.forgotPassword(this.email).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/verify-reset'], {
          queryParams: { email: this.email },
        });
      },
      error: () => {
        this.loading = false;
        alert('Failed to send code');
      },
    });
  }
}
