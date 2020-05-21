import { Component, OnInit, Type } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Filter } from '../datamodel/filter';
import { Book } from '../datamodel/book';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isNull } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private subscriptionPrice: Subscription;
  private subscriptionRouter: Subscription;
  priceValueListener: Subject<string> = new Subject();
  priceValue: number;

  filterData: Filter = new Filter();
  yearsFrom: string[];
  yearsTo: string[];
  selectedYearFrom: string[] = [];
  selectedYearTo: string[] = [];
  sortOptions: string[] = ['Cene rastuće', 'Cene opadajuće', 'Naslovi rastuće', 'Naslovi opadajuće'];
  selectedSort: string[] = ['Naslovi opadajuće'];
  books: Book[] = [];
  showDetailsBook: Book;

  constructor(public bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.yearsFrom = this.bookService.getYears();
    this.yearsTo = this.bookService.getYears();

    this.subscriptionPrice = this.priceValueListener.pipe(
      debounceTime(300)
    ).subscribe(
      () => {
        if (isNull(this.priceValue) || isNaN(this.priceValue) || this.priceValue < 0.00 || this.priceValue > 200000.00)
          this.priceValue = undefined;
        this.filterData.price = this.priceValue;
      }
    );

    this.route.queryParamMap.subscribe(
      params => {
        this.filterData.title = params.get("title") ? params.get("title") : "";
        this.filterData.categories = params.get("categories") ? params.getAll("categories") : [];
        this.filterData.languages = params.get("languages") ? params.getAll("languages") : [];
        this.filterData.price = params.get("price") ? parseFloat(params.get("price")) : undefined;
        this.filterData.yearFrom = params.get("yearFrom") ? parseInt(params.get("yearFrom")) : undefined;
        this.filterData.yearTo = params.get("yearTo") ? parseInt(params.get("yearTo")) : undefined;
        this.selectedSort = params.get("sort") ? params.getAll("sort") : ['Naslovi opadajuće'];
      }
    )
    
    this.startSearch();
    this.subscriptionRouter = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.startSearch();
    })
  }

  ngOnDestroy(): void {
    this.subscriptionPrice.unsubscribe();
    this.subscriptionRouter.unsubscribe();
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

  yearChanged(): void {
    if (this.selectedYearFrom.length > 0)
      this.yearsTo = this.bookService.getYears().filter(year => parseInt(year) >= parseInt(this.selectedYearFrom[0]));
    if (parseInt(this.selectedYearFrom[0]) > parseInt(this.selectedYearTo[0]))
      this.selectedYearTo[0] = this.selectedYearFrom[0];
    this.filterData.yearFrom = this.selectedYearFrom.length > 0 ? parseInt(this.selectedYearFrom[0]) : undefined;
    this.filterData.yearTo = this.selectedYearTo.length > 0 ? parseInt(this.selectedYearTo[0]) : undefined;
  }

  startSearch(): void {
    console.log(this.filterData);
    this.router.navigate(['/search'], {
      queryParams: {
        title: this.filterData.title.length > 0 ? this.filterData.title : undefined,
        categories: this.filterData.categories.length > 0 ? this.filterData.categories : undefined,
        languages: this.filterData.languages.length > 0 ? this.filterData.languages : undefined,
        price: this.filterData.price,
        yearFrom: this.filterData.yearFrom,
        yearTo: this.filterData.yearTo,
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
