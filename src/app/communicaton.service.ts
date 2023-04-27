import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatonService {

  constructor() { }
  listOfIds:number[]=[]
  BillCounter:number=0
  selectedBills:any[]=[]
  AllBills:any[]=wateBills.concat(electricBills)
  ChangeBillCounter(id:number)
  {

    if(!this.listOfIds.includes(id))
    {
      this.listOfIds.push(id)
      this.BillCounter++
    }


  }
  returnSelectedBills(){
    this.listOfIds.forEach(id=>{
      if(this.listOfIds.includes(id))
      {

        if(!this.selectedBills.includes(this.AllBills.filter(bill=>bill.id==id)[0]))
        {
          this.selectedBills.push(this.AllBills.filter(bill=>bill.id==id)[0])
        }




      }
    })
    return this.selectedBills
  }

  returnCounterBill()
  {
    return this.BillCounter
  }
  getWaterBills(){
    return wateBills
  }
  getElectricBill(){
    return electricBills
  }
}
const wateBills:any[]=[
  {
    id:1,
    name:"march water bill",
    amount:25,
    DueDate:'2023-03-18 02:00:00'
  },
  {
    id:2,
    name:"april water bill",
    amount:54,
    DueDate:'2023-04-18 02:00:00'
  },
  {
    id:3,
    name:"may water bill",
    amount:56,
    DueDate:'2023-05-18 02:00:00'
  }
 ]

const electricBills:any[]=[
  {
    id:101,
    name:"march Electric bill",
    amount:25,
    DueDate:'2023-03-18 02:00:00'
  },
  {
    id:201,
    name:"april Electric bill",
    amount:54,
    DueDate:'2023-04-18 02:00:00'
  },
  {
    id:301,
    name:"may Electric bill",
    amount:56,
    DueDate:'2023-05-18 02:00:00'
  }
 ]
