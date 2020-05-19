import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BookService } from '../services/book.service';
import { CartItem } from '../datamodel/cart-item';
import { Book } from '../datamodel/book';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CustomerInfo } from '../datamodel/customer-info';
import { Router } from '@angular/router';

export enum customerDialogOptions {
  CANCEL = 'Odustani',
  CONFIRM = 'Potvrdi'
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customer: CustomerInfo = new CustomerInfo();
  totalPrice: number = 0;
  items: CartItem[];
  showConfirmDialog: boolean = false;
  availableCountries = ['Srbija', 'Severna Makedonija', 'Bugarska', 'Hrvatska'];
  availableDialogOptions = Object.keys(customerDialogOptions).map(x => customerDialogOptions[x]);
  private controllers: FormControl[] = [];

  //Form controls for customer data
  nameController: FormControl = new FormControl('', Validators.required);
  surnameController: FormControl = new FormControl('', Validators.required);
  addresController: FormControl = new FormControl('', Validators.required);
  cityController: FormControl = new FormControl('', Validators.required);
  countryController: FormControl = new FormControl('', Validators.required);
  emailController: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private cartService: CartService, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getEmitter().subscribe(() => this.reloadItems());
    this.reloadItems();
    this.totalPrice = this.cartService.getPrice();
    this.controllers.push(this.nameController, this.surnameController, this.addresController, this.cityController, this.countryController, this.emailController);
  }

  reloadItems(): void {
    this.items = this.cartService.getItems();
  }

  getBookByISBN(isbn: string): Book {
    return this.bookService.getBookByISBN(isbn);
  }

  confirmBuy(): void {
    for (let controller of this.controllers) {
      if (controller.valid)
        continue;
      else
        return;
    }
    this.showConfirmDialog = true;
  }

  checkDialogResponse(response: string): void {
    this.showConfirmDialog = false;
    if (response === customerDialogOptions.CONFIRM) {
      this.cartService.removeAll();
      this.router.navigate(['/checkout/order-recived']);
    }
  }
}
