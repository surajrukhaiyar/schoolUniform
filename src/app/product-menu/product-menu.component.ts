import { Component, OnInit } from '@angular/core';
import { ProductMenuService } from '../service/product-menu.service';
import { product } from '../model/product';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent implements OnInit {
  procuctMS : ProductMenuService;
  productMenuItem : product[];

  constructor(productMenu : ProductMenuService) {  
    this.procuctMS = productMenu;
   }

  ngOnInit() {
    this.getProductMenu();
  }

  getProductMenu(){
    this.procuctMS.getAllProducts()
    .subscribe(products=>{
      this.productMenuItem = <product[]>products;
      console.log(this.productMenuItem);
    });
  }

  postProductMenu(){
    this.procuctMS.postProducts()
    .subscribe(products=>{
      this.productMenuItem = <product[]>products;
      console.log(this.productMenuItem);
    });
  }
}
