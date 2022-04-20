import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { urlValidator } from './regExp.directive';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent{

  constructor() { }

  public autoResize: boolean = true;
  submitted:boolean =false;

  organizationForm= new FormGroup({
    name: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
    shortDescription: new FormControl('', [Validators.required]),
    longDescription: new FormControl('', [Validators.required]),
    links: new FormGroup({
      facebook: new FormControl('', [Validators.required]),
      instagram: new FormControl('', urlValidator(new RegExp("^/+[a-zA-Z0-9.]{1,50}","gm"))),
      twitter: new FormControl('', urlValidator(new RegExp("^/+[a-zA-Z0-9.]{1,50}","gm")))
    })
  })
  
	get organizationFormControl() {
		return this.organizationForm.controls;
	}
  get organizationFormLinksControl(){
    return ((this.organizationForm.get('links') as FormGroup).controls)
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

  onFileSelected(event:any){
    let selectedFile=<File> event.target.files;
  }
  submitOrganization(){
    console.log("hola")
    console.log(this.organizationForm.value)
  }
  cancelAction(){
  }

}
