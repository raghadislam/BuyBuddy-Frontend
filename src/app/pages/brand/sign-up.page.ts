import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth bb-card">
      <h1>Sign up</h1>
      <p class="muted">Create your Brand account</p>

      <label>Brand Name
        <input class="bb-input" placeholder="Enter your brand name">
      </label>

      <label>Email Address
        <input class="bb-input" placeholder="Enter the business Email">
      </label>

      <label>Password
        <input type="password" class="bb-input" placeholder="Create your password">
      </label>

      <label>Category
        <select class="bb-select">
          <option>Fashion</option>
          <option>Accessories</option>
          <option>Beauty</option>
        </select>
      </label>

      <label class="muted"><input type="checkbox"> I agree to terms & conditions</label>

      <button class="bb-button primary">Sign up</button>
    </div>
  `,
  styles:[`
    @import '../auth/login.page.scss';
  `]
})
export class BrandSignUpPage {}
