import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electric-bill',
  templateUrl: './electric-bill.component.html',
  styleUrls: ['./electric-bill.component.scss']
})
export class ElectricBillComponent implements OnInit {

  electricBills:any[]=[
    {
      id:1,
      name:"march Electric bill",
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      name:"april Electric bill",
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      name:"may Electric bill",
      amount:56,
      DueDate:'15/5/2021'
    },
    {
      id:1,
      name:"march Electric bill",
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      name:"april Electric bill",
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      name:"may Electric bill",
      amount:56,
      DueDate:'15/5/2021'
    },{
      id:1,
      name:"march Electric bill",
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      name:"april Electric bill",
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      name:"may Electric bill",
      amount:56,
      DueDate:'15/5/2021'
    },{
      id:1,
      name:"march Electric bill",
      amount:25,
      DueDate:'15/3/2021'
    },
    {
      id:2,
      name:"april Electric bill",
      amount:54,
      DueDate:'15/4/2021'
    },
    {
      id:3,
      name:"may Electric bill",
      amount:56,
      DueDate:'15/5/2021'
    }
   ]
   filteredElectricBills:any[]=this.electricBills
   private _filter:any

   public set filter(value:any){
    this._filter=value
    if(this._filter==''){
      this.filteredElectricBills=this.electricBills
    }
    else{
      this.filteredElectricBills=this.electricBills.filter(bill=>bill.amount==this._filter || bill.name.includes(this._filter) )
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
