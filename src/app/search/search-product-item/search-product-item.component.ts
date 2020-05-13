import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/datamodel/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-search-product-item',
  templateUrl: './search-product-item.component.html',
  styleUrls: ['./search-product-item.component.css']
})
export class SearchProductItemComponent implements OnInit {

  @Input() book: Book;
  @Output() showDetails = new EventEmitter();
  authors: string[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if(this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
    if(this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
    if(this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
  }

  showBookDetails(): void {
    this.showDetails.emit(this.book);
  }

  addToCart(): void {
    this.cartService.addItem(this.book.ISBN);
  }

}
