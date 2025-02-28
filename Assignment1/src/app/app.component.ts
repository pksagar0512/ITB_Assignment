import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./auth-user/login/login.component";
import { RegisterComponent } from "./auth-user/register/register.component";
import { ForgotpasswordComponent } from "./auth-user/forgotpassword/forgotpassword.component";
import { UserComponent } from "./auth-user/user/user.component";

@Component({
  selector: 'app-root',
  imports: [ UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
