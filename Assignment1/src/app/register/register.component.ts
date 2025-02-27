import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employeeId: string = '';
  fullName: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Registering:', this.fullName, this.email);
  }
}
