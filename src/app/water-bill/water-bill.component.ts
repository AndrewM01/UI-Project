import { Component, OnInit ,OnChanges, Output, EventEmitter } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss']
})
export class WaterBillComponent implements OnInit ,OnChanges {
  wateBills:any[]=[]
  filteredWaterBills:any[]=this.wateBills

   dateToggle:boolean=false
   private _filter:any
   @Output() counter=new EventEmitter<number>();

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
   this.wateBills=this.CommService.getWaterBills()
   this.filteredWaterBills=this.wateBills
  }

  ngOnChanges(){

  }

  addToBill(id:number)
  {

    this.CommService.ChangeBillCounter(id)

  }

  get sortByLastModifiedAsend() {
    return this.filteredWaterBills.sort((a: any, b: any) => {
      return <any>new Date(b.DueDate) - <any>new Date(a.DueDate);
    });
  }


  get sortByLastModifiedDesc() {
    return this.filteredWaterBills.sort((a: any, b: any) => {
      return <any>new Date(a.DueDate) - <any>new Date(b.DueDate);
    });
  }


  sort()
  {
    this.dateToggle=!this.dateToggle
    console.log(this.dateToggle)
    if(this.dateToggle){
      this.filteredWaterBills=this.sortByLastModifiedAsend

    }
    else if(!this.dateToggle){
      this.filteredWaterBills=this.sortByLastModifiedDesc

    }

  }
}
