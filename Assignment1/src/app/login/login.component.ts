import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Define email
  password: string = ''; // Define password

  onSubmit() {
    console.log('Login attempt:', this.email, this.password);
  }
}