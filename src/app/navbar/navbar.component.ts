import { Component, OnInit,OnChanges } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnChanges {

  constructor(public CommService:CommunicatonService) {


   }



  ngOnInit(): void {

  }
  ngOnChanges(){

  }









}
