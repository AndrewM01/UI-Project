import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.scss'],
})
export class ElectricityComponent implements OnInit {
  products: Product[] = [];

  constructor(private data: DataService, private auth: AuthService) {}

  userId: string | null = '';
  subject = new Subject();
  ngOnInit(): void {
    this.auth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.subject.next(user.uid);
      }
    });
    this.getAllProducts();
  }

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
  logout() {
    this.auth.logout();
  }
}
