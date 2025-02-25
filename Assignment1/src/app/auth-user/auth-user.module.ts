import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserComponent
  ]
})
export class AuthUserModule { }
