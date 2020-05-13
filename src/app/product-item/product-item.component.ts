import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Book } from '../datamodel/book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  tabSelected: number = 1;
  authors: string[] = [];
  @Input() book: Book;
  @Output() onCloseDetailView = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
    if (this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
    if (this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    if (e.target.classList.contains('can-close') || e.target.tagName === "APP-PRODUCT-ITEM") this.onCloseDetailView.emit();
  }

  addToCart(): void {
    this.cartService.addItem(this.book.ISBN);
  }
}

