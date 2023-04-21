import { Component, OnInit ,OnChanges } from '@angular/core';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss']
})
export class WaterBillComponent implements OnInit ,OnChanges {
   wateBills:any[]=[
    {
      id:1,
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      amount:56,
      DueDate:'15/5/2021'
    }
   ]

   filter:number=0
  constructor() { }

  ngOnInit(): void {
    if(this.wateBills.length==0){
      this.wateBills=this.wateBills
    }
  }

  ngOnChanges(){

  }

  FilterBills(){
    this.wateBills=this.wateBills.filter(bill=>bill.amount==this.filter)
  }

}
