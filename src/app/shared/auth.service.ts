import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (user) => {
        localStorage.setItem('token', 'true');
        if (user.user?.uid == 'v14Bj2ovnRhjedXsynDKxtvE41A3') {
          this.router.navigate(['/admin']);
        } else this.router.navigate(['/elec']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
