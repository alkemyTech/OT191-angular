import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { AlertService } from 'src/app/core/services/alert.service';
import { User } from 'src/app/core/models/user.model';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

import { Register } from '../../actions/auth.actions';
import { State } from '../../reducers/auth.reducer';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../services/validators/validator.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  loading = false;

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.pattern(this.valSer.emailPattern)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.valSer.passwordPattern),
        ],
      ],
      password2: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.valSer.passwordPattern),
        ],
      ],
      terms: [false, [Validators.requiredTrue]],
    },
    {
      validators: [this.valSer.mustMatch('password', 'password2')],
    }
  );

  constructor(
    private router: Router,
    private alerts: AlertService,
    private fb: FormBuilder,
    private auth: AuthService,
    private valSer: ValidatorService,
    private store: Store<State>,
    public dialog: MatDialog
  ) {}

  isInvalid(value: string) {
    return (
      this.registerForm.controls[value].errors &&
      this.registerForm.controls[value].touched
    );
  }

  termsConditions() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Términos y condiciones',
        description: 'Terms',
        value: 'question',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result
        ? this.registerForm.controls['terms'].setValue(true)
        : this.registerForm.controls['terms'].setValue(false);
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {
      let user: Partial<User> = {
        name: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
      };
      this.store.dispatch(new Register(user));

      this.auth.register(user).subscribe({
        next: (res) => {
          this.loading = false;
          this.alerts.alertNotification(
            '¡Se ha registrado el usuario!',
            'Su usuario ha sido registrado con éxito',
            'success'
          );
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.alerts.alertNotification(
            '¡Error al registrarse!',
            'Ha ocurrido un error al intentar registrar el usuario',
            'error'
          );
          this.loading = false;
        },
      });
    } catch (error) {
      this.alerts.alertNotification('Error', 'Error desconocido', 'error');
      this.loading = false;
    }
  }
}
