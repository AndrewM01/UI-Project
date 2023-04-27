import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { TelephoneBillComponent } from './telephone-bill/telephone-bill.component';
import { CommunicatonService } from './communicaton.service';
import { BillCheckoutComponent } from './bill-checkout/bill-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterBillComponent,
    NavbarComponent,
    ElectricBillComponent,
    TelephoneBillComponent,
    BillCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommunicatonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
