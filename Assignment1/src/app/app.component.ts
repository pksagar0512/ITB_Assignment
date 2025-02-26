import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgetpasswordComponent } from './auth-user/forgetpassword/forgetpassword.component';
import { UserComponent } from './auth-user/user/user.component';


@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent,ForgetpasswordComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
