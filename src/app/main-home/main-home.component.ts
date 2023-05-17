import { Component, OnInit } from '@angular/core';
const UrgentBills:any[]=[
  {
    img:'../assets/waterbill.png',
    name:'May Water Bill',
    amount:50,
    DueDate:'15/5/2023'
  },
  {
    img:'../assets/Smartphone.png',
    name:'May Phone Bill',
    amount:45,
    DueDate:'15/5/2023'
  },
  {
    img:'../assets/electricity.png',
    name:'May Electric Bill',
    amount:38,
    DueDate:'15/5/2023'
  }
]
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Bills:any[]=UrgentBills
}
