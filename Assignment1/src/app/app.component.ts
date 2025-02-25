import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgetPassComponent } from "./auth-user/forget-pass/forget-pass.component";
import { UserComponent } from "./auth-user/user/user.component";
@Component({
  selector: 'app-root',
  imports: [LoginComponent, ForgetPassComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
