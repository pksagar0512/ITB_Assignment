import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [],
  imports: [
    LoginComponent,RegisterComponent,CommonModule
  ]
})
export class AuthUserModule { }
