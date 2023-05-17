import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatTableDataSource } from '@angular/material/table';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product';
import { DataService } from '../shared/data.service';
import { User } from '../user';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'april phone bill', price: 54, date: 'Apr 24, 2023' },
  {
    position: 2,
    name: 'march electric bill',
    price: 25,
    date: 'March 24, 2023',
  },
  { position: 3, name: 'may water bill', price: 56, date: 'May 24, 2023' },
];
@Component({
  selector: 'app-profile-sec',
  templateUrl: './profile-sec.component.html',
  styleUrls: ['./profile-sec.component.scss'],
})
export class ProfileSecComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitrer = faTwitter;
  faEnvelope = faEnvelope;
  constructor(private data: DataService, private fire: AngularFirestore) {}
  products: Product[] = [];
  user: User[] = [];
  ngOnInit(): void {
    this.getCart();
  }

  displayedColumns: string[] = ['name', 'price', 'date'];
  dataSource = new MatTableDataSource<any>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getCart() {
    this.data.getInvoice().subscribe(
      (res: any) => {
        this.dataSource = res.map((e: any) => {
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
}
