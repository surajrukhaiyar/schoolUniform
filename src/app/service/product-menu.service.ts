import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../model/product';
import { HandleError, HttpErrorHandler } from "../http-error-handler.service";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductMenuService {

  private handleError: HandleError;
  allProductsUrl = 'http://localhost:3000/productMenu';
  addProductsUrl = 'http://localhost:3000/productMenu';
  removeProductsUrl = 'http://localhost:3000/productMenu';
  
  constructor(private http : HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProductMenuService')
   }

  getAllProducts(){
    //httpOptions.headers = httpOptions.headers.set('Authorization',sessionStorage.getItem("authToken"));    
    return this.http.get<product[]>(this.allProductsUrl)
    .pipe(
      catchError(this.handleError('Getting all data ', String))
    );       
  }

  postProducts(){
    return this.http.get<product[]>(this.allProductsUrl)
    .pipe(
      catchError(this.handleError('Getting all data ', String))
    );       
  }

  removeProducts(){

  }

}
