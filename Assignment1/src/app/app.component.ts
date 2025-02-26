import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './shiff/login/login.component';
import { RegisterComponent } from './shiff/register/register.component';
import { ForgotpasswordComponent } from './shiff/forgotpassword/forgotpassword.component';
import { UserComponent } from './shiff/user/user.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, ForgotpasswordComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
