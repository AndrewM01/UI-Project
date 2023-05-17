import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA_Orange: any[] = [
  {position: 1, name: 'El King 60', price: 60, internet: '3000 GB',units:'500',paid:'Post-Paid'},
  {position: 2, name: 'El Dolphin', price: 100, internet: '8000 GB',units:'900',paid:'Pre-Paid'},
  {position: 3, name: 'El King 80', price: 80, internet: '5000 GB',units:'800',paid:'Pre-Paid'},

];
const ELEMENT_DATA_Vodafone: any[] = [
  {position: 1, name: 'Flex 25', price: 25, internet: '1150 GB',units:'300',paid:'Post-Paid'},
  {position: 2, name: 'Flex 35', price: 35, internet: '1350 GB',units:'500',paid:'Pre-Paid'},
  {position: 3, name: 'Flex 60', price: 60, internet: '1650 GB',units:'750',paid:'Post-Paid'},

];
const ELEMENT_DATA_ET: any[] = [
  {position: 1, name: 'hekaya 30', price: 30, internet: '1000 GB',units:'150',paid:'Post-Paid'},
  {position: 2, name: 'hekaya 45', price: 45, internet: '2000 GB',units:'350',paid:'Pre-Paid'},
  {position: 3, name: 'hekaya 60', price: 60, internet: '2500 GB',units:'550',paid:'Pre-Paid'},

];
const ELEMENT_DATA_We: any[] = [
  {position: 1, name: '10 Nitro Prime', price: 10, internet: '1250 GB',units:'300',paid:'Post-Paid'},
  {position: 2, name: '20 Nitro Prime', price: 20, internet: '2750 GB',units:'400',paid:'Pre-Paid'},
  {position: 3, name: '40 Nitro Prime', price: 40, internet: '6500 GB',units:'700',paid:'Pre-Paid'},

];

const SP:any[]=[
  {
    img:"../assets/Vodafone_Logo.png",
    dataSource : new MatTableDataSource(ELEMENT_DATA_Vodafone),
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  },
  {
    img:"../assets/Orange_Logo.png",
    dataSource : new MatTableDataSource(ELEMENT_DATA_Orange),
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  },
  {
    img:"../assets/We_Logo.png",
    dataSource : new MatTableDataSource(ELEMENT_DATA_We),
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  },
  {
    img:"../assets/ET_Logo.png",
    dataSource : new MatTableDataSource(ELEMENT_DATA_ET),
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
]
@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})

export class ServiceProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'price', 'internet','units','paid'];

   ServiceProvidersList:any[]=SP

}
