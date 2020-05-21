import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { CartService } from '../services/cart.service';
import { BookService } from '../services/book.service';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      providers: [CartService, BookService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let bookService: BookService = TestBed.inject(BookService);
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.book = bookService.getBookByISBN("978-0596805524");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
