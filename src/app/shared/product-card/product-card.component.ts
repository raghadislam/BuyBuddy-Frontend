import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { Product } from '../../core/models';

@Component({
  standalone: true,
  selector: 'bb-product-card',
  imports: [RouterLink, NgFor, NgIf, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
}
