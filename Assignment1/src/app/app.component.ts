import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
// import { UserComponent } from './auth-user/user/user.component';
// import { ForgotpasswordComponent } from './auth-user/forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-root',
  imports: [RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
