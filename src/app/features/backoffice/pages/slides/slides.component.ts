import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subscriber } from "rxjs";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SlideI } from "src/app/core/models/slide.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RestService } from "src/app/core/services/endpoint/rest.service";


@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"],
})
export class SlidesComponent implements OnInit {
  public images: any;
  public Editor = ClassicEditor;
  public stringimage: string = "";
  
  public slide:SlideI = {
    id: 0,
    name: "",
    order: 0,
    description: "",
    image: "",
  };
  editarSlide = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    description: new FormControl('',Validators.required),
    order: new FormControl(0)
  })
  

  constructor(private sanitizer: DomSanitizer, private api: RestService) {}

  ngOnInit(): void {
    
  }

  getImage(event: any): any {
    const image = event.target.files[0];
    this.stringimage = image.name
    this.convertToBase64(image);
    
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.images = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
    };
  }

  //POST OR PUT
  editarForm(form:SlideI){
    if(this.slide.order == 0){
      form.image=this.stringimage
      this.api.createSlide(form).subscribe( data =>{
       
      })
    }else{
      form.image=this.stringimage
      this.api.editSlide(form).subscribe( data =>{
        
      })
      
    }
    
  }


  
}
