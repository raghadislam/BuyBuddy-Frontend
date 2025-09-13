// src/app/pages/auth/verify-reset.page.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth bb-card">
      <h1>Verify reset code</h1>
      <p class="muted">Enter the code sent to {{ email }}</p>
      <input
        class="bb-input"
        [(ngModel)]="code"
        maxlength="6"
        placeholder="Code"
      />
      <button class="bb-button primary" (click)="verify()">Verify</button>
    </div>
  `,
})
export class VerifyResetPage {
  email = this.route.snapshot.queryParamMap.get('email') || '';
  code = '';
  loading = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  verify() {
    this.loading = true;
    this.auth.verifyResetCode(this.email, this.code).subscribe({
      next: (res: any) => {
        this.loading = false;
        // If your API returns a resetToken here, pass it to /reset
        const resetToken = res?.resetToken ?? this.code; // fallback if your API uses code as token
        this.router.navigate(['/reset'], {
          queryParams: { token: resetToken },
        });
      },
      error: () => {
        this.loading = false;
        alert('Invalid reset code');
      },
    });
  }
}
