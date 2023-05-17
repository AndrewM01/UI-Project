import { Component, OnInit, OnChanges } from '@angular/core';
import { CommunicatonService } from '../communicaton.service';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnChanges {
  faFileInvoice = faFileInvoice;
  faUser = faUser;
  constructor(
    public CommService: CommunicatonService,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}
  ngOnChanges() {}
}
