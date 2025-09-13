import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { MockDataService } from '../../core/mock-data.service';

@Component({
  standalone: true,
  templateUrl: './search.page.html',
  imports: [SearchBarComponent, ProductCardComponent, NgFor],
})
export class SearchPage {
  results = this.data.products;
  constructor(private data: MockDataService) {}
  onSearch(q: string){
    const s = q.toLowerCase();
    this.results = this.data.products.filter(p =>
      p.title.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s));
  }
}
