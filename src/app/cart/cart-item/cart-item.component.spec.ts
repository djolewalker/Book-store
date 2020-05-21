import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { CartService } from 'src/app/services/cart.service';
import { BookService } from 'src/app/services/book.service';
import { CartItem } from 'src/app/datamodel/cart-item';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [CartService, BookService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = new CartItem("978-0596805524",1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
