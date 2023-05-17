import { Component, OnInit } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
import { getLocaleDateFormat } from '@angular/common';
import { DataService } from '../shared/data.service';
import { Product } from '../product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-bill-checkout',
  templateUrl: './bill-checkout.component.html',
  styleUrls: ['./bill-checkout.component.scss'],
})
export class BillCheckoutComponent implements OnInit {
  Bills: any[] = [];
  products$: Observable<Product[]>;
  total: number = 0;
  selectedItems: any[] = [];

  todayString: string = new Date().toDateString();
  constructor(
    public comService: CommunicatonService,
    private data: DataService,
    private fire: AngularFirestore
  ) {
    const userUID = localStorage.getItem('userUID') || '{}';
    const cartCollection = this.fire
      .collection('Users')
      .doc(userUID)
      .collection<Product>('Cart');
    this.products$ = cartCollection.valueChanges();

    this.products$
      .pipe(
        map((bill) => {
          let total = 0;
          bill.forEach((item) => {
            total = Number(total + item.price);
          });
          return total;
        })
      )
      .subscribe((total) => {
        this.total = Number(this.total + total);
      });
  }
  products: Product[] = [];
  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.data.getCart().subscribe(
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

  removeBill(id: any) {
    this.data.deleteCart(id);
  }

  checkOut() {
    const selectedItems = this.products.filter((bill) => bill.isCheckedOut);
    selectedItems.forEach((item) => {
      this.data.addInvoice(item);
      this.data.deleteCart(item);
    });
    this.selectedItems = [];
  }
}
