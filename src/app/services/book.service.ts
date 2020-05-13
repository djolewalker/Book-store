import { Injectable } from '@angular/core';
import books from "../../assets/books.json";
import { Book } from '../datamodel/book';
import { Filter } from '../datamodel/filter';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[];

  constructor() {
    this.books = books;
  }

  searchTitles(searchString: string): string[] {
    return this.books.filter(book => book.Naslov.toLowerCase().includes(searchString.toLowerCase())).map(book => book.Naslov);
  }

  getLanguages(): string[] {
    let languages: string[] = [];
    this.books.map(book => book.Jezik).forEach(language => { if (!languages.includes(language)) languages.push(language) });
    return languages;
  }

  getCategories(): string[] {
    let categories: string[] = [];
    this.books.map(book => book.Oblast).forEach(category => { if (!categories.includes(category)) categories.push(category) });
    return categories;
  }

  getBookByISBN(isbn: string): Book {
    return this.books.filter(book => book.ISBN === isbn).length > 0 ? this.books.filter(book => book.ISBN === isbn)[0] : null;
  }

  getBooks(filter: Filter, sort: string): Book[] {
    let books: Book[] = this.books;
    if (!this.isEmpty(filter.title)) books = books.filter(book => book.Naslov.toLowerCase().includes(filter.title.toLowerCase()));
    if (!this.isEmpty(filter.categories) && filter.categories.length > 0) books = books.filter(
      function (book) {
        return this.includes(book.Oblast);
      },
      filter.categories
    );
    if (!this.isEmpty(filter.languages) && filter.languages.length > 0) books = books.filter(
      function (book) {
        return this.includes(book.Jezik);
      },
      filter.languages
    );
    if (!this.isEmpty(filter.price)) books = books.filter(book => parseFloat(book.Cena) <= filter.price);
    if (!this.isEmpty(filter.dateFrom)) books = books.filter(book => parseInt(book["Godina izdanja"]) >= filter.dateFrom.getFullYear());
    if (!this.isEmpty(filter.dateTo)) books = books.filter(book => parseInt(book["Godina izdanja"]) <= filter.dateTo.getFullYear());
    if (!this.isEmpty(sort)) {
      if (sort === 'Cene rastuće') books = books.sort((a, b) => parseFloat(a.Cena) - parseFloat(b.Cena));
      else if (sort === 'Cene opadajuće') books = books.sort((a, b) => parseFloat(b.Cena) - parseFloat(a.Cena));
      else if (sort === 'Naslovi rastuće') {
        books = books.sort((a, b) => {
          if (a.Naslov.toLocaleLowerCase() < b.Naslov.toLowerCase()) return 1;
          else return -1;
        }
        )
      }
      else if (sort === 'Naslovi opadajuće') {
        books = books.sort((a, b) => {
          if (a.Naslov.toLocaleLowerCase() > b.Naslov.toLowerCase()) return 1;
          else return -1;
        }
        )
      }
    }
    return books;
  }

  private isEmpty(variable: any): boolean {
    if (variable === null) return true;
    if (variable === undefined) return true;
    if (variable === NaN) return true;
    if (variable === "") return true;
    if (variable === 0) return true;
    return false;
  }
}
