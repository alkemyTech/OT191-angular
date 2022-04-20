import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subscriber } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RestService } from "src/app/core/services/endpoint/rest.service";
import { UserI } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  public images: any;
  
  public stringimage: string = "";
  
  user:UserI={
    name:"",
    id:0,
    role_id : 0,
    email: "",
    profile_image: "",  
  }
  
  editarUser = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(4)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    role_id: new FormControl(null)
  })

  constructor(private sanitizer: DomSanitizer, private api: RestService) { }

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

  editarForm(form:UserI){
    if(this.user.role_id == 0){
      form.profile_image=this.stringimage
      this.api.createUser(form).subscribe( data =>{
        console.log(data)
      })
    }else{
      form.profile_image=this.stringimage
      this.api.editUser(form).subscribe( data =>{
        console.log(data)
      })
    }
  }

}
