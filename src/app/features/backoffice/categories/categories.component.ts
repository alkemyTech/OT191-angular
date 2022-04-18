import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {   }

  submitted = false;
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  description: string="";
  name: string="";

  ngOnInit(): void {  }

  get categoryFormControl(){
    return this.categoryForm.controls;
  }
  
  onFileSelected(event: any){
    let selectedFile=<File> event.target.files;
    console.log(selectedFile);
  }

  submitCategory(){
    this.submitted=true;
    if (this.categoryForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.categoryForm.value);
    }
  }


  cancelAction(){
    console.log("asdas");
    console.log(this.categoryFormControl.name.errors);
  }
}
