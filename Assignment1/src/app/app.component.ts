import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { UserRegisterComponent } from './user/user.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
