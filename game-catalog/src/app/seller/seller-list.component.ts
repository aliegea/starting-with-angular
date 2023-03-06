import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISeller } from '../models';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styles: [],
})
export class SellerListComponent implements OnChanges {
  @Input() sellers: ISeller[] = [];
  @Input() filterAll!:boolean;
  @Input() sortAsc! :boolean;
  visibleSellers: ISeller[] = [];

  ngOnInit(): void {
    if (this.filterAll) {
      // Show all sellers
      this.visibleSellers = this.sellers;
    } else {
      // Show sellers with available stock
      this.visibleSellers = this.sellers.filter((seller) => seller.isAvailable);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['filterAll'] && !changes?.['filterAll'].firstChange) {
      if (this.filterAll) {
        // Show all sellers
        this.visibleSellers = this.sellers;
      } else {
        // Show sellers with available stock
        this.visibleSellers = this.sellers.filter((seller) => seller.isAvailable);
      }
    }
  }}

  // private sortSellers = (sortBy: string): void => {
  //   this.visibleSellers.sort(this.sortSellersActions[sortBy]);
  // };

  // private sortSellersActions: { [key: string]: any } = {
  //   ['asc']: (current: ISeller, after: ISeller) => after.price - current.price,
  //   ['desc']: (current: ISeller, after: ISeller) => current.price - after.price,
  // };

