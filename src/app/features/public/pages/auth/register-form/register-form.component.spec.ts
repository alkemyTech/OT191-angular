import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { SharedModule } from 'primeng/api';

import { MaterialModule } from 'src/app/core/utils/material/material.module';
import { PrimengModule } from 'src/app/core/utils/primeng/primeng.module';
import { AuthEffects } from 'src/app/store/auth/effects/auth.effects';

import { of } from 'rxjs';

import { reducers } from 'src/app/store';
import { AlertService } from 'src/app/core/services/alert.service';
import { BaseApiService } from 'src/app/shared/services/base-api.service';

import { AuthRoutingModule } from '../auth-routing.module';
import { AuthService } from '../../../services/auth/auth.service';
import { ValidatorService } from '../../../services/auth/validators/validator.service';
import { User } from '../../../../../core/models/user.model';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const auth = jasmine.createSpyObj('AuthService', ['register']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [
        CommonModule,
        AuthRoutingModule,
        PrimengModule,
        MaterialModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        PdfViewerModule,
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        StoreModule.forRoot(reducers),
        HttpClientTestingModule,
      ],
      providers: [
        AlertService,
        FormBuilder,
        BaseApiService,
        ValidatorService,
        Store,
        HttpClient,
        { provide: AuthService, useValue: auth },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is invalid and no coincidence in passwords', () => {
    component.registerForm.controls['name'].setValue('TEST');
    component.registerForm.controls['terms'].setValue(true);
    component.registerForm.controls['email'].setValue('test');
    component.registerForm.controls['password'].setValue('asAS12!$');
    component.registerForm.controls['password2'].setValue('ASas21$!');
    spyOn(component, 'isInvalid').and.returnValue(true);
    fixture.detectChanges();

    const emailMessage =
      fixture.debugElement.nativeElement.querySelector('#emailError');

    const passMessage2 =
      fixture.debugElement.nativeElement.querySelector('#errorPass2');

    expect(component.registerForm.status).toEqual('INVALID');
    expect(emailMessage.innerText.trim()).toEqual(
      'Correo electrónico inválido.'
    );
    expect(passMessage2.innerText.trim()).toEqual(
      'Las contraseñas no coinciden.'
    );
  });

  it('should detect form is invalid and terms and conditions accepted should be required', () => {
    component.registerForm.controls['name'].setValue('TEST');
    component.registerForm.controls['terms'].setValue(false);
    component.registerForm.controls['email'].setValue('test');
    component.registerForm.controls['password'].setValue('asAS12!$');
    component.registerForm.controls['password2'].setValue('ASas21$!');
    spyOn(component, 'isInvalid').and.returnValue(true);
    fixture.detectChanges();

    const termsMessage =
      fixture.debugElement.nativeElement.querySelector('#errorTerms');
    expect(component.registerForm.status).toEqual('INVALID');
    expect(termsMessage.innerText.trim()).toEqual(
      'Debe aceptar los términos y condiciones.'
    );
  });

  it('should execute request HTTP and be successful', () => {
    component.registerForm.controls['name'].setValue('TEST');
    component.registerForm.controls['terms'].setValue(true);
    component.registerForm.controls['email'].setValue('testing@testing.com');
    component.registerForm.controls['password'].setValue('asDS12#!');
    fixture.detectChanges();

    const user: Partial<User> = {
      name: component.registerForm.controls['name'].value,
      email: component.registerForm.controls['email'].value,
      password: component.registerForm.controls['password'].value,
    };
    auth.register.and.returnValue(
      of({ success: true })
    );
    expect(auth.register).toBeDefined();
  });

  it('should execute HTTP request and give error', () => {
    component.registerForm.controls['name'].setValue('TEST');
    component.registerForm.controls['terms'].setValue(true);
    component.registerForm.controls['email'].setValue('testing@testing.com');
    component.registerForm.controls['password'].setValue('asDS12#!');
    fixture.detectChanges();

    const user: Partial<User> = {
      name: component.registerForm.controls['name'].value,
      email: component.registerForm.controls['email'].value,
      password: component.registerForm.controls['password'].value,
    };

    auth.register.and.returnValue(
      of({ success: false })
    );
    expect(auth.register).toBeDefined();
  });
});
