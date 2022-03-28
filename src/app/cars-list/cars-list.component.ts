import { Component, OnInit } from '@angular/core';
import {PopularItems} from '../categories'
import {CartService} from '../cartservices.service'
import { product } from '../product';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  populItems = PopularItems
  filteredItems: product[] = []
  popItems = [ 
    {
      imgUrl:"",
      names: "Tata"
    },
    {
      imgUrl:"",
      names:  "Hyundai" 
    },
    {
      imgUrl:"",
      names: "Maruti Suzuki" 
    },
    {
      imgUrl:"",
      names: "Honda"
    },
    {
      imgUrl:"",
      names: "Toyota"
    },
    {
      imgUrl:"",
      names:  "Ford" 
    },
    {
      imgUrl:"",
      names:  "Mahindra" 
    },
    {
      imgUrl:"",
      names:  "Skoda"
    },
    {
      imgUrl:"",
      names:  "Benz"
    },
    {
      imgUrl:"",
      names:  "Audi" 
    },
  ]

  stars=[
    {
      starImg:""
    }
  ]
  constructor(private fs : CartService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
  }

  add(item:any){
    this.fs.orderedItem.push(item)
  }


}
