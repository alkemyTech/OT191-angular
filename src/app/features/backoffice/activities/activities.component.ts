import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ICategory } from './activities.interface';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

  category:ICategory= {id:0, name:"", description: "", pathImage: ""}

  @Input () activitySelected: ICategory | undefined;



  submitted = false;
  activityForm = new FormGroup({
    name: new FormControl(this.category!=undefined?this.category.name: '', [Validators.required]),
    description: new FormControl(this.category!=undefined?this.category.description : ''),
    image: new FormControl(this.category!=undefined?this.category.pathImage: '', Validators.required)
  });

  // --------Config CKEditor-------
  public Editor = ClassicEditor;
  public editorData = this.category!=undefined?this.category.description : '';
  public config = {
    placeholder: 'Ingrese la descripcion de la actividad'
  }
  // ------------------------------

  get activityFormControl(){
    return this.activityForm.controls;
  }

  onChange({editor}:ChangeEvent){
    const data = editor.getData();
    this.activityForm.setValue({description:'data'});

  }

  onFileSelected(event: any){
    let selectedFile=<File> event.target.files;
    console.log(selectedFile);
  }

  submitActivity(){
    this.submitted=true;
    if (this.activityForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.activityForm.value);
    }
  }


  cancelAction(){

  }


}
