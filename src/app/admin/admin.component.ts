import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  products: Product[] = [];
  isLate: boolean = false;
  isShown: boolean = false;
  n: boolean = true;
  constructor(
    private auth: AuthService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getAllUsers() {
    this.data.getAllUsers().subscribe(
      (res: any) => {
        this.users = res.map((e: any) => {
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
  showElec(userID: any) {
    this.router.navigate(['admin', userID]);
    this.n = !this.n;
    this.isShown = !this.isShown;
    this.data.getAllElecAdmin(userID).subscribe(
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
