import { Component } from '@angular/core';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent} from './auth-user/register/register.component';
import { ForgetPasswordComponent } from './auth-user/forget-password/forget-password.component';
import { UserComponent } from './auth-user/user/user.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent,ForgetPasswordComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agular';
}
