import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Filter } from '../datamodel/filter';
import { Book } from '../datamodel/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private subscription: Subscription;

  filterData: Filter = new Filter();
  maxDateAll: Date;
  minDateTo: Date = new Date(-8640000000000000);
  sortOptions: string[] = ['Cene rastuće', 'Cene opadajuće', 'Naslovi rastuće', 'Naslovi opadajuće'];
  selectedSort: string[] = ['Naslovi opadajuće'];
  books: Book[] = [];
  showDetailsBook: Book;

  constructor(public bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.maxDateAll = new Date();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        this.filterData.title = params.get("title") ? params.get("title") : "";
        this.filterData.categories = params.get("categories") ? params.getAll("categories") : [];
        this.filterData.languages = params.get("languages") ? params.getAll("languages") : [];
        this.filterData.price = params.get("price") ? parseFloat(params.get("price")) : undefined;
        this.filterData.dateFrom = params.get("dateFrom") ? new Date(params.get("dateFrom")) : undefined;
        this.filterData.dateTo = params.get("dateTo") ? new Date(params.get("dateTo")) : undefined;
        this.selectedSort = params.get("sort") ? params.getAll("sort") : ['Naslovi opadajuće'];
      }
    )
    this.startSearch();
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.startSearch();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  expandFilter(): void {
    this.showFilter();
    document.getElementById("filter-box").classList.toggle("filter-box-expand");
    document.getElementById("more-arrow").classList.toggle("less-arrow");
  }

  showFilter(): void {
    if (document.getElementsByClassName("filter-box-expand").length > 0)
      document.getElementById("filter").classList.toggle("filter-hidden");
  }

  dateFromChaned(): void {
    this.minDateTo = this.filterData.dateFrom;
    if (this.minDateTo > this.filterData.dateTo)
      this.filterData.dateTo = this.minDateTo;
  }

  startSearch(): void {
    this.router.navigate(['/search'], {
      queryParams: {
        title: this.filterData.title.length > 0 ? this.filterData.title : undefined,
        categories: this.filterData.categories.length > 0 ? this.filterData.categories : undefined,
        languages: this.filterData.languages.length > 0 ? this.filterData.languages : undefined,
        price: this.filterData.price,
        dateFrom: this.filterData.dateFrom,
        dateTo: this.filterData.dateTo,
        sort: this.selectedSort[0]
      }
    })
    this.books = this.bookService.getBooks(this.filterData, this.selectedSort[0])
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
}
