import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from './product';
import { DataService } from './shared/data.service';

@Injectable({
  providedIn: 'root',
})
export class CommunicatonService {
  constructor(private fire: AngularFirestore, private data: DataService) {}
  listOfIds: string[] = [];
  BillCounter: number = 0;
  BillTotal: number = 0;
  selectedBills: any[] = [];
  AllBills: any[] = wateBills.concat(electricBills);
  accountAmount: number = 0;
  getAllWater() {
    return this.fire
      .collection('/Users/')
      .doc('wUikY7RjlPXbA3wLZ7PVV4GxgrF2')
      .collection('Water')
      .snapshotChanges();
  }
  payBillNow(bill: Product) {
    if (this.accountAmount > bill.price) {
      this.accountAmount -= bill.price;
    }
  }

  ChangeBillCounter(id: string) {
    if (!this.listOfIds.includes(id)) {
      this.listOfIds.push(id);
      this.BillCounter++;
    }
  }

  returnSelectedBills() {
    this.listOfIds.forEach((id) => {
      if (this.listOfIds.includes(id)) {
        if (
          !this.selectedBills.includes(
            this.AllBills.filter((bill) => bill.id == id)[0]
          )
        ) {
          this.selectedBills.push(
            this.AllBills.filter((bill) => bill.id == id)[0]
          );
        }
      }
    });
    return this.selectedBills;
  }
  removeBill(removID: number) {
    for (let i = 0; i < this.selectedBills.length; i++) {
      if (this.selectedBills.at(i).id == removID) {
        this.BillTotal -= this.selectedBills.at(i).amount;
        this.selectedBills.splice(i, 1);
        this.BillCounter--;
        for (let j = 0; j < this.listOfIds.length; j++) {
          this.listOfIds.splice(j, 1);
        }
      }
    }

    return this.selectedBills;
  }

  returnCounterBill() {
    return this.BillCounter;
  }
  getWaterBills() {
    return wateBills;
  }
  getElectricBill() {
    return electricBills;
  }
  getPhoneBill() {
    return phoneBills;
  }
}
const wateBills: any[] = [
  {
    id: 1,
    name: 'march water bill',
    amount: 25,
    added: false,
    DueDate: '2023-03-18 02:00:00',
  },
  {
    id: 2,
    name: 'april water bill',
    amount: 54,
    added: false,
    DueDate: '2023-04-18 02:00:00',
  },
  {
    id: 3,
    name: 'may water bill',
    amount: 56,
    added: false,
    DueDate: '2023-05-18 02:00:00',
  },
];

const electricBills: any[] = [
  {
    id: 101,
    name: 'march Electric bill',
    amount: 25,
    DueDate: '2023-03-18 02:00:00',
  },
  {
    id: 201,
    name: 'april Electric bill',
    amount: 54,
    DueDate: '2023-04-18 02:00:00',
  },
  {
    id: 301,
    name: 'may Electric bill',
    amount: 56,
    DueDate: '2023-05-18 02:00:00',
  },
];

const phoneBills: any[] = [
  {
    id: 301,
    name: 'march Phone bill',
    amount: 25,
    DueDate: '2023-03-18 02:00:00',
  },
  {
    id: 401,
    name: 'april Phone bill',
    amount: 54,
    DueDate: '2023-04-18 02:00:00',
  },
  {
    id: 501,
    name: 'may Phone bill',
    amount: 56,
    DueDate: '2023-05-18 02:00:00',
  },
];
