import { Injectable } from '@angular/core';
import { product } from './product';
@Injectable({
  providedIn: 'root'
})
export class CarStoreServiceService {

  constructor() { }
  orderItem: product[]=[]
  getOrders():product[]{
    return this.orderItem
  }
}
