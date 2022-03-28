import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {product} from './product'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsList : any =[]
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  orderedItem: product[] = []
  getOrders():product[]{
    return this.orderedItem
  }
}