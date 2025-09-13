// src/app/pages/product/product.page.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, CurrencyPipe, NgIf } from '@angular/common';
import { MockDataService } from '../../core/mock-data.service';
import { CartService } from '../../core/cart.service';

@Component({
  standalone: true,
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  imports: [NgFor, CurrencyPipe, NgIf],
})
export class ProductPage {
  product = this.data.product(this.route.snapshot.paramMap.get('id')!);
  adding = false;
  addMsg = '';

  constructor(
    private route: ActivatedRoute,
    private data: MockDataService,
    private cart: CartService
  ) {}

  addToCart() {
    if (!this.product) return;
    this.adding = true;
    this.addMsg = '';

    // If your API expects the product/variant id as :itemId, pass product.id (or variant id if you have one)
    this.cart.addItem(this.product.id, { quantity: 1 }).subscribe({
      next: () => {
        this.adding = false;
        this.addMsg = 'Added to cart ✓';
      },
      error: (e) => {
        this.adding = false;
        this.addMsg = e?.error?.message ?? 'Could not add item';
      },
    });
  }
}
