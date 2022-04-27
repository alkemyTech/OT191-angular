import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/utils/material/material.module';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AuthModule {}
