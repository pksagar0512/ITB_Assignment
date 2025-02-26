import { Component } from '@angular/core';
import { LoginComponent } from "./auth-user/login/login.component";
import { RegisterComponent } from "./auth-user/register/register.component";
import { ForgetpasswordComponent } from "./auth-user/forgetpassword/forgetpassword.component";
import { UserComponent } from "./auth-user/user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, ForgetpasswordComponent, UserComponent], // Fixed extra comma
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
}
