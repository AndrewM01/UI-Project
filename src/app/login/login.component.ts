import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  form: FormGroup;
  password: string = '';

  constructor(private auth: AuthService, private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitForm() {
    if (!this.form.valid) {
      alert('Please Enter Valid Credentials');
      return;
    }
    const email = this.form.get('email')?.value;
    const pass = this.form.get('password')?.value;
    this.auth.login(email, pass);
  }
  ngOnInit(): void {}
}
