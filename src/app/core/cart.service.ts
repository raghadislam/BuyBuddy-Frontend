// src/app/core/cart.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CartItem {
  id: string; // item id in the cart (often same as product/variant id)
  productId?: string;
  title?: string;
  price?: number;
  image?: string;
  quantity: number;
  color?: string;
  size?: string;
  subtotal?: number;
}
export interface Cart {
  id: string;
  items: CartItem[];
  subtotal?: number;
  shipping?: number;
  total?: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private http = inject(HttpClient);
  private api = environment.api;

  private _cart$ = new BehaviorSubject<Cart | null>(null);
  cart$ = this._cart$.asObservable();
  count$ = this.cart$.pipe(
    map((c) => c?.items?.reduce((n, i) => n + i.quantity, 0) ?? 0)
  );

  /** Load the current cart */
  load() {
    return this.http
      .get<Cart>(`${this.api}/carts`)
      .pipe(tap((cart) => this._cart$.next(cart)));
  }

  /** Add new item using path param (:itemId). Optionally send quantity/variant in body if your API accepts it. */
  addItem(
    itemId: string,
    body?: {
      quantity?: number;
      color?: string;
      size?: string;
      variantId?: string;
    }
  ) {
    return this.http
      .post<Cart>(
        `${this.api}/carts/items/${encodeURIComponent(itemId)}`,
        body ?? {}
      )
      .pipe(tap((cart) => this._cart$.next(cart)));
  }

  /** Update quantity (or variant) */
  updateItem(
    itemId: string,
    patch: {
      quantity?: number;
      color?: string;
      size?: string;
      variantId?: string;
    }
  ) {
    return this.http
      .patch<Cart>(
        `${this.api}/carts/items/${encodeURIComponent(itemId)}`,
        patch
      )
      .pipe(tap((cart) => this._cart$.next(cart)));
  }

  /** Remove a single item */
  removeItem(itemId: string) {
    return this.http
      .delete<Cart>(`${this.api}/carts/items/${encodeURIComponent(itemId)}`)
      .pipe(tap((cart) => this._cart$.next(cart)));
  }

  /** Clear entire cart */
  clear() {
    return this.http
      .delete<Cart>(`${this.api}/carts`)
      .pipe(tap((cart) => this._cart$.next(cart)));
  }

  /** Preview totals */
  checkoutPreview() {
    return this.http.post<{
      total: number;
      subtotal: number;
      shipping: number;
    }>(`${this.api}/carts/checkout/preview`, {});
  }
}
