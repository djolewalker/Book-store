import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductItemComponent } from './search-product-item.component';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

describe('SearchProductItemComponent', () => {
  let component: SearchProductItemComponent;
  let fixture: ComponentFixture<SearchProductItemComponent>;
  let bookService: BookService; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductItemComponent ],
      providers: [CartService, BookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    bookService = TestBed.inject(BookService);
    fixture = TestBed.createComponent(SearchProductItemComponent);
    component = fixture.componentInstance;
    component.book = bookService.getBookByISBN("978-0596805524");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
