import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { mailValidator } from './regExps.directive';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.scss']
})
export class FormcontactComponent {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public autoResize: boolean = true;
  submitted:boolean =false;

  contactForm= new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email, mailValidator(/^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/)]),
    message: new FormControl('', [Validators.required])
  })
  
	get contactFormControl() {
		return this.contactForm.controls;
	}

  validateControlForSpacing(control: AbstractControl){
    if(control.valid || control.untouched){
      return true
    }else{
      return false
    }
  }

  validateControlForText(control: AbstractControl){
    return (control.touched || this.submitted) && control.invalid
  }


  submitContact(){
    console.log(this.contactForm.value)
  }
  cancelAction(){
  }

}
