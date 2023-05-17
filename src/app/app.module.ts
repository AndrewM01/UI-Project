import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { TelephoneBillComponent } from './telephone-bill/telephone-bill.component';
import { BillCheckoutComponent } from './bill-checkout/bill-checkout.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WalletIconComponent } from './wallet-icon/wallet-icon.component';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServiceProvidersComponent } from './phone-bill/service-providers/service-providers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MobileBillsComponent } from './phone-bill/mobile-bills/mobile-bills.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { ProfileSecComponent } from './profile-sec/profile-sec.component';
import { MainHomeComponent } from './main-home/main-home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    WaterBillComponent,
    WalletIconComponent,
    NavbarComponent,
    ProfileSecComponent,
    MainHomeComponent,
    ElectricBillComponent,
    TelephoneBillComponent,
    BillCheckoutComponent,
    AddBillComponent,
    PhoneBillComponent,
    ServiceProvidersComponent,
    MobileBillsComponent,
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
