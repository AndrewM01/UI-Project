import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { AppComponent } from './app.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { BillCheckoutComponent } from './bill-checkout/bill-checkout.component';

const routes: Routes = [
  {path:'water',component: WaterBillComponent },
  {path:'electric',component:ElectricBillComponent},
  {path:'phone',component:ElectricBillComponent},
  {path:'checkout',component:BillCheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
