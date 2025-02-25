import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { UserComponent } from './auth-user/user/user.component';
import { ForgetPasswordComponent } from './auth-user/forget-password/forget-password.component';
@Component({
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent,UserComponent,ForgetPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
