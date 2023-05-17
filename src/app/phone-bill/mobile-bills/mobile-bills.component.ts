import { Component, OnInit } from '@angular/core';
import { CommunicatonService } from 'src/app/communicaton.service';
import { Product } from 'src/app/product';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-mobile-bills',
  templateUrl: './mobile-bills.component.html',
  styleUrls: ['./mobile-bills.component.scss'],
})
export class MobileBillsComponent implements OnInit {
  constructor(private data: DataService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.filteredElectricBills = this.electricBills;
  }

  ngOnChanges() {}
  phoneBill: any[] = [];
  private _filter: any;
  filteredPhoneBills: any[] = [];
  value: string = '';

  public set filter(value: any) {
    this._filter = value;
    if (this._filter == '') {
      this.filteredPhoneBills = this.phoneBill;
    } else {
      this.filteredPhoneBills = this.phoneBill.filter(
        (bill) =>
          bill.amount == this._filter || bill.name.includes(this._filter)
      );
    }
  }
  public get() {
    return this._filter;
  }
  get sortByLastModifiedAsend() {
    return this.filteredPhoneBills.sort((a: any, b: any) => {
      return <any>new Date(b.DueDate) - <any>new Date(a.DueDate);
    });
  }

  get sortByLastModifiedDesc() {
    return this.filteredPhoneBills.sort((a: any, b: any) => {
      return <any>new Date(a.DueDate) - <any>new Date(b.DueDate);
    });
  }

  electricBills: any[] = [];
  filteredElectricBills: any[] = this.electricBills;
  dateToggle: boolean = false;
  wallet: number = 0;
  products: Product[] = [];

  userId: string | null = '';

  getAllProducts() {
    this.data.getAllPhone().subscribe(
      (res: any) => {
        this.products = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  payBillNow(bill: Product) {
    let id = localStorage.getItem('userUID' || '{}');
    if (this.data.walletCheck(bill.price)) {
      this.data.deleteProduct(bill, id);
    }
  }

  addToBill(product: any) {
    this.data.addToCart(product);
  }
  logout() {
    this.auth.logout();
  }
}
