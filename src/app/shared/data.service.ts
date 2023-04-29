import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userID: any;
  constructor(private fire: AngularFirestore, private auth: AuthService) {
    auth.auth.onAuthStateChanged((user) => {
      if (user) localStorage.setItem('userUID', user.uid);
    });
  }
  addProduct(product: Product) {
    product.id = this.fire.createId();
    return this.fire.collection('/Products').add(product);
  }
  getAllElec() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Elec')
      .snapshotChanges();
  }
  getAllElecAdmin(userID: any) {
    console.log(userID);
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Elec')
      .snapshotChanges();
  }

  getAllUsers() {
    return this.fire.collection('/Users').snapshotChanges();
  }

  deleteProducts(product: Product) {
    return this.fire.doc('/Products/' + product.id).delete();
  }
}
