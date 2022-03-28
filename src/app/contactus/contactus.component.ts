import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  constructor() {
    
  }
  fun(){

    alert("Thank You for respense.We will be in soon contact you!!!");
    }
  ngOnInit(): void {

  }

}
