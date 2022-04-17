import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loading = false;
  
 // crear formulario de respuesta del login
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  
  constructor(
    private router: Router, 
    private alerts: AlertService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }


  isInvalid( value: string ) {

    return this.loginForm.controls[value].errors 
            && this.loginForm.controls[value].touched;
  }



  onSubmit(){
    
    if ( this.loginForm.invalid )  {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {

      let user: Partial<User> = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }

      console.log(user);


      
    } catch (error) {
      this.alerts.alertNotification('Error', 'Error desconocido', 'error');
      this.loading = false;
    }
      
  }

}
