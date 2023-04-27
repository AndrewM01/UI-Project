import { Component, OnInit } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';

@Component({
  selector: 'app-electric-bill',
  templateUrl: './electric-bill.component.html',
  styleUrls: ['./electric-bill.component.scss']
})
export class ElectricBillComponent implements OnInit {

  electricBills:any[]=[]
   filteredElectricBills:any[]=this.electricBills
   dateToggle:boolean=false
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

  constructor(private comService:CommunicatonService) { }

  ngOnInit(): void {
    this.electricBills=this.comService.getElectricBill()
    this.filteredElectricBills=this.electricBills
  }

  ngOnChanges(){

  }

  addToBill(id:number)
  {

    this.comService.ChangeBillCounter(id)

  }


  get sortByLastModifiedAsend() {
    return this.filteredElectricBills.sort((a: any, b: any) => {
      return <any>new Date(b.DueDate) - <any>new Date(a.DueDate);
    });
  }


  get sortByLastModifiedDesc() {
    return this.filteredElectricBills.sort((a: any, b: any) => {
      return <any>new Date(a.DueDate) - <any>new Date(b.DueDate);
    });
  }


  sort()
  {
    this.dateToggle=!this.dateToggle

    if(this.dateToggle){
      this.filteredElectricBills=this.sortByLastModifiedAsend

    }
    else if(!this.dateToggle){
      this.filteredElectricBills=this.sortByLastModifiedDesc

    }

  }


}
