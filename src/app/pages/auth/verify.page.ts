import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth bb-card">
      <h1>Verify your email</h1>
      <p class="muted">Enter the 6-digit code we sent to {{ email }}</p>

      <input
        class="bb-input"
        [(ngModel)]="code"
        maxlength="6"
        placeholder="Enter code"
      />
      <button class="bb-button primary" (click)="verify()" [disabled]="loading">
        Verify
      </button>
      <button class="bb-button ghost" (click)="resend()" [disabled]="resending">
        Resend code
      </button>
    </div>
  `,
})
export class VerifyPage {
  email = this.route.snapshot.queryParamMap.get('email') || '';
  code = '';
  loading = false;
  resending = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  verify() {
    this.loading = true;
    this.auth.verifyEmail(this.email, this.code).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login'], {
          queryParams: { verified: 1, email: this.email },
        });
      },
      error: (e) => {
        this.loading = false;
        alert(e.error?.message ?? 'Invalid code');
      },
    });
  }

  resend() {
    this.resending = true;
    this.auth.resendVerification(this.email).subscribe({
      next: () => {
        this.resending = false;
        alert('Verification email sent');
      },
      error: () => {
        this.resending = false;
        alert('Could not resend');
      },
    });
  }
}
