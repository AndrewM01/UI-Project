import { Component, OnInit } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-bill-checkout',
  templateUrl: './bill-checkout.component.html',
  styleUrls: ['./bill-checkout.component.scss']
})
export class BillCheckoutComponent implements OnInit {
   Bills:any[]=[]

   todayString : string = new Date().toDateString();
  constructor(private comService:CommunicatonService) { }
  total:number=0
  ngOnInit(): void {
     this.Bills=this.comService.returnSelectedBills()
     this.Bills.forEach(bill=>{
      this.total+=bill.amount
     })
  }



}
