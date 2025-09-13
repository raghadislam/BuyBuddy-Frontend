import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { MockDataService } from '../../core/mock-data.service';

@Component({
  standalone: true,
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  imports: [NgFor, CurrencyPipe],
})
export class CartPage {
  items = this.data.products.slice(0,2);
  constructor(private data: MockDataService){}
  total() { return this.items.reduce((s,i)=> s + i.priceEGP, 0); }
}
