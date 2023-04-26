import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatonService {

  constructor() { }

  BillCounter:number=0
  ChangeBillCounter(counter:number)
  {
    console.log("at Service" + counter)
      this.BillCounter=counter
  }

  returnCounterBill()
  {
    return this.BillCounter
  }
}
