import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { AuthService } from '../core/auth.service';
import { NgIf, NgTemplateOutlet, AsyncPipe } from '@angular/common';
import { CartService } from '../core/cart.service';

@Component({
  standalone: true,
  selector: 'bb-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgTemplateOutlet,
    AsyncPipe,
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  constructor(
    public auth: AuthService,
    public cart: CartService,
    private router: Router
  ) {
    auth.init(); // restore session via access token or refresh cookie
    // this.auth.user$.subscribe((u) => {
    //   console.log('User observable changed:', u);
    // });
    // console.log('auth token', this.auth.token);

    if (this.auth.token) this.cart.load().subscribe();
  }

  onLogout() {
    this.auth.logout().subscribe({
      next: () => {
        // Navigate to home or login after logout
        this.router.navigate(['/']);
      },
      error: () => {
        // Even if backend fails, clear local state
        this.router.navigate(['/']);
      },
    });
  }
}
