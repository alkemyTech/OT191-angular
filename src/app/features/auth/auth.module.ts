import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
