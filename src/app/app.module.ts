import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { CartComponent } from './cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductGroupComponent,
    ProductCategoriesComponent,
    ProductMenuComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
