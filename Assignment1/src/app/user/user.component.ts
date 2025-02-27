import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  username: string = '';
  fullName: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Username:', this.username);
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Implement user registration logic (API call, database storage, etc.)
  }
}