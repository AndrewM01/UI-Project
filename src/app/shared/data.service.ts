import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';
import { Product } from '../product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userID: any;

  constructor(private fire: AngularFirestore, private auth: AuthService) {
    auth.auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('userUID', user.uid);
      }
    });
  }
  addProduct(product: Product, userID: any) {
    product.id = this.fire.createId();
    console.log(product.type, userID);
    return this.fire
      .collection('/Users')
      .doc(userID)
      .collection(product.type)
      .add(product);
  }
  getAllElec() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Electricity')
      .snapshotChanges();
  }
  getAllWater() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Water')
      .snapshotChanges();
  }
  getAllPhone() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Phone')
      .snapshotChanges();
  }
  getCart() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Cart')
      .snapshotChanges();
  }
  getInvoice() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Invoice')
      .snapshotChanges();
  }
  getAllElecAdmin(userID: any) {
    console.log(userID);
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Electricity')
      .snapshotChanges();
  }
  getAllWaterAdmin(userID: any) {
    console.log(userID);
    return this.fire
      .collection('/Users/')
      .doc(userID)
      .collection('Water')
      .snapshotChanges();
  }

  getAllUsers() {
    return this.fire.collection('/Users').snapshotChanges();
  }
  getUserById() {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire.collection('/Users').doc(userID).valueChanges();
  }

  walletCheck(point: number) {
    let userID = localStorage.getItem('userUID') || '{}';
    let wallet = JSON.parse(localStorage.getItem('wallet') || '{}');
    console.log(wallet, userID, point);
    if (wallet > point) {
      this.fire.doc('/Users/' + userID).update({ wallet: increment(-point) });
      return true;
    } else {
      alert('you dont have enough credits to pay this bill');
      return false;
    }
  }
  addInvoice(product: Product) {
    let userID = localStorage.getItem('userUID') || '{}';
    product.dueDate = new Date();
    product.id = this.fire.createId();
    return this.fire
      .collection('/Users')
      .doc(userID)
      .collection('Invoice')
      .add(product);
  }
  addToCart(product: Product) {
    let userID = localStorage.getItem('userUID') || '{}';
    return this.fire
      .collection('/Users')
      .doc(userID)
      .collection('Cart')
      .add(product);
  }
  checkout(product: Product) {
    let userID = localStorage.getItem('userUID') || '{}';
    console.log(product.id);
    this.fire.doc('/Users/' + userID + '/Cart/' + product.id).delete();
    this.fire.doc('/Users/' + userID + '/Electricity/' + product.id).delete();
  }

  deleteProduct(product: Product, userID: any) {
    console.log(product.id, userID, product.isCheckedOut, product.type);
    return this.fire
      .doc('/Users/' + userID + '/' + product.type + '/' + product.id)
      .delete();
  }
  deleteUser(product: Product) {
    return this.fire.doc('/Users/' + product.id).delete();
  }
  deleteCart(product: Product) {
    let userID = localStorage.getItem('userUID') || '{}';
    console.log(userID, product.id);
    return this.fire.doc('/Users/' + userID + '/Cart/' + product.id).delete();
  }
}
