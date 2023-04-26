import { Component, OnInit ,OnChanges, Output, EventEmitter } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
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
    },
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
    },{
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
    },{
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
   @Output() counter=new EventEmitter<number>();
   BillCounter:number=0
   public set filter(value:any){
    this._filter=value
    if(this._filter==''){
      this.filteredWaterBills=this.wateBills
    }
    else{
      this.filteredWaterBills=this.wateBills.filter(bill=>bill.amount==this._filter || bill.name.includes(this._filter) )
    }

   }
   public get(){
    return this._filter
   }

  constructor(private CommService:CommunicatonService) { }

  ngOnInit(): void {

  }

  ngOnChanges(){

  }

  addToBill()
  {
    this.BillCounter++;
    console.log(this.BillCounter);
    this.CommService.ChangeBillCounter(this.BillCounter)
     console.log(this.CommService.returnCounterBill())
  }


}
