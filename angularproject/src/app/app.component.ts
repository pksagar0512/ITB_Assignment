import { PasswordComponent } from './auth-user/password/password.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent} from './auth-user/register/register.component';
import { ForgotPasswordComponent } from './auth-user/forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  imports: [ForgotPasswordComponent , LoginComponent , RegisterComponent, PasswordComponent, RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
