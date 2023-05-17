import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { CommunicatonService } from '../communicaton.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-wallet-icon',
  templateUrl: './wallet-icon.component.html',
  styleUrls: ['./wallet-icon.component.scss'],
})
export class WalletIconComponent implements OnInit {
  faWallet = faWallet;
  isShown: boolean = false;
  user: any;
  wallet: number = 1;
  constructor(
    public comService: CommunicatonService,
    private fire: AngularFirestore,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.auth.onAuthStateChanged((user) => {
      if (
        user &&
        localStorage.getItem('userUID') != 'v14Bj2ovnRhjedXsynDKxtvE41A3'
      ) {
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    });
    this.user = this.fire
      .doc('/Users/' + localStorage.getItem('userUID'))
      .get()
      .subscribe((doc) => {
        this.wallet = doc.get('wallet');
        localStorage.setItem('wallet', JSON.stringify(this.wallet));
      });
  }
}
