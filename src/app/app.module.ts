import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';
import { CartInfoComponent } from './header/cart-info/cart-info.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AutocompleteSelectComponent } from './search/autocomplete-select/autocomplete-select.component';
import { MultiSelectComponent } from './search/multi-select/multi-select.component';
import { SingleSelectComponent } from './search/single-select/single-select.component';
import { SearchProductItemComponent } from './search/search-product-item/search-product-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileHeaderComponent,
    CartInfoComponent,
    HomeComponent,
    SearchComponent,
    AutocompleteSelectComponent,
    MultiSelectComponent,
    SingleSelectComponent,
    SearchProductItemComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
