import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Auth-user/login/login.component';
//import { UserComponent } from './Auth-user/user/user.component';
//import { ForgotpasswordComponent } from './Auth-user/forgotpassword/forgotpassword.component';
//import { RegisterComponent } from './Auth-user/register/register.component';
@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
