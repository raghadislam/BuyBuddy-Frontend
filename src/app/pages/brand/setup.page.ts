import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="bb-card" style="max-width:720px;margin:24px auto;padding:18px;display:grid;gap:12px;">
      <h2>Set up your Brand account</h2>
      <div class="muted">Owner details</div>
      <label>Full Name <input class="bb-input" placeholder="Owner's full name"></label>
      <label>National ID <input class="bb-input" placeholder="The brand’s owner national ID"></label>
      <label>Phone Number <input class="bb-input" placeholder="Business phone number"></label>

      <div class="muted" style="margin-top:8px;">Legal details</div>
      <label>CRN <input class="bb-input" placeholder="Commercial Registration Number"></label>
      <label>Tax ID <input class="bb-input" placeholder="Tax ID / VAT Number"></label>

      <div class="muted" style="margin-top:8px;">Payment details</div>
      <label>Payment Method
        <select class="bb-select">
          <option>Bank Transfer</option>
          <option>Cash on Delivery</option>
        </select>
      </label>

      <button class="bb-button primary">Next</button>
    </div>
  `
})
export class BrandSetupPage {}
