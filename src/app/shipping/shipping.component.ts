import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  shipCost;
  constructor(private cartService : CartService) { }
  ngOnInit(): void {
    this.shippingCosts = [
      {
        "type": "Overnight",
        "price": 25.99
      },
      {
        "type": "2-Day",
        "price": 9.99
      },
      {
        "type": "1-Week",
        "price": 3.99
      },
      {
        "type": "Postal",
        "price": 2.99
      }
    ];
  }

}
