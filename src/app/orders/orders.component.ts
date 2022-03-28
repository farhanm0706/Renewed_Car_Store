import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { CarStoreServiceService} from '../car-store-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: product[] = []
  constructor(private fs:CarStoreServiceService) { }

  ngOnInit(): void {
    this.orderItems = this.fs.getOrders()
    // console.log(this.orderItems)
  }

}
