import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from 'src/app/core/utils/material/material.module';

import { PdfViewerModule }  from 'ng2-pdf-viewer';

import { SharedModule } from '../../../../shared/shared.module';
import { PrimengModule } from '../../../../core/utils/primeng/primeng.module';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthEffects } from 'src/app/store/auth/effects/auth.effects';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';




@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    SharedModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
