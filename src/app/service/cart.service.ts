import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { product } from '../model/product';
import { HandleError, HttpErrorHandler } from "../http-error-handler.service";
import { catchError } from 'rxjs/operators';
import { StaticInjector } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private handleError: HandleError;
  userCartUrl = 'http://localhost:3000/userCart';

  constructor(private http : HttpClient, httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('CartService')
  }


  getCartProducts( user: string){
    //httpOptions.headers = httpOptions.headers.set('Authorization',sessionStorage.getItem("authToken"));    
    return this.http.get<product[]>(this.userCartUrl, {
            params: new HttpParams().set('user', user)})
            .pipe(
              catchError(this.handleError('Getting user cart data ', String))
            ); 
  }
}
