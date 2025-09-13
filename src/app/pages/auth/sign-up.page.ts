import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  name = '';
  userName = '';
  email = '';
  password = '';
  role: any = 'USER';
  agree = false;
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    if (!this.agree) {
      alert('Please agree to terms');
      return;
    }
    this.loading = true;
    this.auth
      .signUp({
        name: this.name,
        userName: this.userName,
        email: this.email,
        password: this.password,
        role: this.role,
      })
      .subscribe({
        next: () => {
          this.loading = false;
          // go to verify screen with email
          this.router.navigate(['/verify'], {
            queryParams: { email: this.email },
          });
        },
        error: (e) => {
          this.loading = false;
          alert(e.error?.message ?? 'Sign up failed');
        },
      });
  }
}
