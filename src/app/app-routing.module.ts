import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterBillComponent } from './water-bill/water-bill.component';

const routes: Routes = [{path:'water',component: WaterBillComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
