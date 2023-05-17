import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Product } from '../product';

@Component({
  selector: 'app-electric-bill',
  templateUrl: './electric-bill.component.html',
  styleUrls: ['./electric-bill.component.scss'],
})
export class ElectricBillComponent implements OnInit {
  electricBills: any[] = [];
  filteredElectricBills: any[] = this.electricBills;
  dateToggle: boolean = false;
  wallet: number = 0;
  private _filter: any;
  products: Product[] = [];
  public set filter(value: any) {
    this._filter = value;
    if (this._filter == '') {
      this.filteredElectricBills = this.electricBills;
    } else {
      this.filteredElectricBills = this.electricBills.filter(
        (bill) =>
          bill.amount == this._filter || bill.name.includes(this._filter)
      );
    }
  }
  public get() {
    return this._filter;
  }

  userId: string | null = '';

  getAllProducts() {
    this.data.getAllElec().subscribe(
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

  logout() {
    this.auth.logout();
  }
  constructor(private data: DataService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.filteredElectricBills = this.electricBills;
  }

  ngOnChanges() {}

  get sortByLastModifiedAsend() {
    return this.filteredElectricBills.sort((a: any, b: any) => {
      return <any>new Date(b.dueDate) - <any>new Date(a.dueDate);
    });
  }

  get sortByLastModifiedDesc() {
    return this.filteredElectricBills.sort((a: any, b: any) => {
      return <any>new Date(a.dueDate) - <any>new Date(b.dueDate);
    });
  }
  addToBill(product: any) {
    this.data.addToCart(product);
  }

  sort() {
    this.dateToggle = !this.dateToggle;

    if (this.dateToggle) {
      this.filteredElectricBills = this.sortByLastModifiedAsend;
    } else if (!this.dateToggle) {
      this.filteredElectricBills = this.sortByLastModifiedDesc;
    }
  }
}
