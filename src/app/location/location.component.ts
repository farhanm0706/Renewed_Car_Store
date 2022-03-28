import { Component, OnInit } from '@angular/core';
import {CartService} from '../cartservices.service'
import { product } from '../product';
@Component({
  selector: 'app-orders',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  cartItems: product[] = []

  constructor(private fs:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.fs.getOrders()
     console.log(this.cartItems)
    
  }
  delete(id:number){
    this.cartItems = this.cartItems.filter((v, j) => j !== id);
  }
  order()
  {
    alert("Ordered Successfully");
  }
}
