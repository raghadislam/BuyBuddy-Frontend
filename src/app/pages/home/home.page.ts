import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { MockDataService } from '../../core/mock-data.service';

@Component({
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [NgFor, ProductCardComponent],
})
export class HomePage {
  constructor(public data: MockDataService) {}
}
