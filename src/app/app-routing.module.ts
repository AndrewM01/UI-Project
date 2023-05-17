import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { AppComponent } from './app.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { BillCheckoutComponent } from './bill-checkout/bill-checkout.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { ProfileSecComponent } from './profile-sec/profile-sec.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/:id',
    component: AdminComponent,
  },
  {
    path: 'addBill',
    component: AddBillComponent,
  },
  {
    path: 'addBill/:id',
    component: AddBillComponent,
  },
  { path: 'water', component: WaterBillComponent },
  { path: 'electric', component: ElectricBillComponent },
  { path: 'phone', component: PhoneBillComponent },
  { path: 'checkout', component: BillCheckoutComponent },
  { path: 'profile', component: ProfileSecComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
