import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartService : CartService;
  userCartProducts : product[];

  constructor(userCartService : CartService) {
      this.cartService = userCartService;
   }

  ngOnInit() {
    this.getUserCartProducts("user1");
  //  this.userCartProducts=[{"img":"assets/girls/products/sweatshirt.jpg","name":"Sweaters","description":"winter wear","quantity":"0","category":"sportsDay","price":"100","group":"girl"},{"img":"assets/girls/products/bermudashorts.jpg","name":"Bermuda shorts","description":"Girls bermuda","quantity":"0","category":"sportsDay","price":"100","group":"girl"},{"img":"assets/girls/products/blazer.jpg","name":"blazer","description":"party wear","quantity":"0","category":"sportsDay","price":"100","group":"girl"}]
  }

  getUserCartProducts(user : string){
    this.cartService.getCartProducts(user).subscribe(cartProucts=>{
      this.userCartProducts = <product[]>cartProucts[0]['cartProducts'];;
      console.log(this.userCartProducts);
    });
  }
}
