import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { ValidatorService } from '../../services/validators/validator.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  loading = false;

  // crear formulario de respuesta del login
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.valSer.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.valSer.passwordPattern)]],
    password2: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.valSer.passwordPattern)]]
  },
  {
    validators: [ this.valSer.mustMatch('password','password2') ]
  });
  
  constructor(
    private router: Router, 
    private alerts: AlertService,
    private fb: FormBuilder,
    private auth: AuthService,
    private valSer: ValidatorService
  ) {
  }

  ngOnInit(): void {
  }


  isInvalid( value: string ) {

    return this.registerForm.controls[value].errors 
            && this.registerForm.controls[value].touched;
  }



  onSubmit(){
    
    if ( this.registerForm.invalid )  {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {

      let user: Partial<User> = {
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value
      }

      console.log(user);


      
    } catch (error) {
      this.alerts.alertNotification('Error', 'Error desconocido', 'error');
      this.loading = false;
    }
      
  }

}
