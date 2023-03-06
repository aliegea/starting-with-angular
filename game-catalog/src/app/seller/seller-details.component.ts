import { Component, Input } from '@angular/core';
import { ISeller } from '../models';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styles: [`.icons{
    display:flex;
    justify-content:flex-end;
    padding-top:20px;
  }`
  ]
})
export class SellerDetailsComponent {
  @Input() seller!: ISeller;
}
