import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { CartItem } from '../datamodel/cart-item';
import { Subject, Observable } from 'rxjs';
import { Book } from '../datamodel/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly LS_ITEM_NAME: string = 'mojaKnjizaraKorpa';
  private storageSub = new Subject<string>();

  constructor(private bookService: BookService) {
  }

  getEmitter(): Observable<any> {
    return this.storageSub.asObservable();
  }

  getItems(): CartItem[] {
    var items = JSON.parse(localStorage.getItem(this.LS_ITEM_NAME));
    return items ? items : [];
  }

  getBooks(): Book[] {
    var books = [];
    this.getItems().forEach(item => books.push(this.bookService.getBookByISBN(item.bookIsbn)));
    return books;
  }

  getPrice(): number {
    let price = 0;
    this.getItems().forEach(item => price += item.count * parseFloat(this.bookService.getBookByISBN(item.bookIsbn).Cena));
    return price;
  }

  getCount(): number {
    let count = 0;
    this.getItems().forEach(item => count += item.count);
    return count;
  }

  addItem(bookIsbn: string): void {
    let items = this.getItems();
    if (items.filter(item => item.bookIsbn === bookIsbn).length > 0)
      items.filter(item => item.bookIsbn === bookIsbn)[0].count++;
    else
      items.push(new CartItem(bookIsbn, 1));
    localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
    this.storageSub.next('changed');
  }

  removeItem(bookIsbn: string): void {
    let items = this.getItems();
    if (items.filter(item => item.bookIsbn === bookIsbn).length > 0) {
      if (items.filter(item => item.bookIsbn === bookIsbn)[0].count > 1)
        items.filter(item => item.bookIsbn === bookIsbn)[0].count--;
      else
        items.splice(items.indexOf(items.filter(item => item.bookIsbn === bookIsbn)[0]), 1);
    }
    localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
    this.storageSub.next('changed');
  }

  removeAllOfItem(bookIsbn: string): void {
    let items = this.getItems();
    if (items.filter(item => item.bookIsbn === bookIsbn).length > 0) {
      items.splice(items.indexOf(items.filter(item => item.bookIsbn === bookIsbn)[0]), 1);
    }
    localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
    this.storageSub.next('changed');
  }
}
