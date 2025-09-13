import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'bb-search-bar',
  imports: [FormsModule],
  template: `
    <div class="wrap bb-card">
      <input [(ngModel)]="q" class="bb-input" placeholder="Search" (keyup.enter)="submit()"/>
      <button class="bb-button ghost" (click)="submit()">Search</button>
    </div>
  `,
  styles:[`
    .wrap{ display:flex; gap:10px; padding:10px; align-items:center; }
    input.bb-input { background:#0f111a; }
  `]
})
export class SearchBarComponent {
  q = '';
  @Output() search = new EventEmitter<string>();
  submit(){ this.search.emit(this.q.trim()); }
}
