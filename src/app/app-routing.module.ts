import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/productGroup', 
    pathMatch: 'full' 
  },
  {
    path: 'productGroup',
    component: ProductGroupComponent
  },
  {
    path: 'productCategories/:group',
    component: ProductCategoriesComponent
  },
  {
    path: 'productMenu/:group/:category',
    component: ProductMenuComponent
  },
  {
    path: 'userCart',
    component: CartComponent
  }                                                                                                                                                                                                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
