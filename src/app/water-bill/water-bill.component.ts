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
      name:"march water bill",
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      name:"april water bill",
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      name:"may water bill",
      amount:56,
      DueDate:'15/5/2021'
    }
   ]
   filteredWaterBills:any[]=this.wateBills
   private _filter:any

   public set filter(value:number){
    this._filter=value
    if(this._filter==''){
      this.filteredWaterBills=this.wateBills
    }
    else{
      this.filteredWaterBills=this.wateBills.filter(bill=>bill.amount==this._filter)
    }

   }
   public get(){
    return this._filter
   }

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){

  }


}
