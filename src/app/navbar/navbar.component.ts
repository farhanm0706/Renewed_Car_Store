import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   imgVisible=true; 
  constructor() { }
   changeView()
   {
     this.imgVisible=false;
   }
   changeView1()
   {
     this.imgVisible=true;
   }
   
  ngOnInit(): void {
  }

}
