import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
import { Product } from '../product';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss'],
})
export class WaterBillComponent implements OnInit, OnChanges {
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.filteredWaterBills = this.products;
  }

  ngOnChanges() {}
  products: Product[] = [];
  filteredWaterBills: Product[] = this.products;
  waterBills: Product[] = [];
  wallet: number = 0;

  dateToggle: boolean = false;
  private _filter: any;

  payBillNow(bill: Product) {
    let id = localStorage.getItem('userUID' || '{}');
    if (this.data.walletCheck(bill.price)) {
      this.data.deleteProduct(bill, id);
    }
  }
  public set filter(value: any) {
    this._filter = value;
    console.log(this.filteredWaterBills);
    if (this._filter == '') {
      this.filteredWaterBills = this.products;
    } else {
      this.filteredWaterBills = this.products.filter(
        (bill) => bill.price == this._filter || bill.name.includes(this._filter)
      );
    }
  }
  public get() {
    return this._filter;
  }

  getAllProducts() {
    this.data.getAllWater().subscribe(
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

  get sortByLastModifiedAsend() {
    return this.filteredWaterBills.sort((a: any, b: any) => {
      return <any>new Date(b.dueDate) - <any>new Date(a.dueDate);
    });
  }

  addToBill(product: any) {
    this.data.addToCart(product);
  }
  get sortByLastModifiedDesc() {
    return this.filteredWaterBills.sort((a: any, b: any) => {
      return <any>new Date(a.dueDate) - <any>new Date(b.dueDate);
    });
  }

  sort() {
    this.dateToggle = !this.dateToggle;
    if (this.dateToggle) {
      this.filteredWaterBills = this.sortByLastModifiedAsend;
    } else if (!this.dateToggle) {
      this.filteredWaterBills = this.sortByLastModifiedDesc;
    }
  }
}
