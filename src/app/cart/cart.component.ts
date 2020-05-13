import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../datamodel/cart-item';
import { Book } from '../datamodel/book';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  totalPrice: number = 0.00;
  @Input() showDetailsBook: Book = null;

  constructor(private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getEmitter().subscribe(() => this.reloadItems());
    this.reloadItems();
  }

  hideBookDetails(): void {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
    this.showDetailsBook = null;
  }

  showBookDetails(book: Book): void {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
    this.showDetailsBook = book;
  }

  reloadItems(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = 0.00;
    this.items.forEach(item => this.totalPrice += item.count * parseFloat(this.bookService.getBookByISBN(item.bookIsbn).Cena));
  }
}
