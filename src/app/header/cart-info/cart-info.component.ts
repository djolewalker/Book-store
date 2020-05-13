import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

  bookCount: number = 0;
  totalPrice: number = 0.00;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getEmitter().subscribe(() => this.updateData());
    this.updateData();
  }

  updateData(): void {
    this.bookCount = this.cartService.getCount();
    this.totalPrice = this.cartService.getPrice();
  }

}
