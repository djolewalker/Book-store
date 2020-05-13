import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/datamodel/book';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/datamodel/cart-item';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  book: Book;
  bookPrice: number = 0;
  @Input() cartItem: CartItem;
  @Output() showDetails = new EventEmitter();
  authors: string[] = [];

  constructor(private cartService: CartService, private bookService: BookService) { }

  ngOnInit(): void {
    this.book = this.bookService.getBookByISBN(this.cartItem.bookIsbn);
    if (this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
    if (this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
    if (this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
    this.bookPrice = parseFloat(this.book.Cena);
  }

  showBookDetails(): void {
    this.showDetails.emit(this.book);
  }

  removeFromCart(): void {
    this.cartService.removeAllOfItem(this.book.ISBN);
  }

  incrementItem(): void {
    this.cartService.addItem(this.book.ISBN);
  }

  decrementItem(): void {
    this.cartService.removeItem(this.book.ISBN);
  }

}
