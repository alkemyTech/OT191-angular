import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subscriber } from "rxjs";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SlideI } from "src/app/core/models/slide.interface";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { RestService } from "src/app/core/services/endpoint/rest.service";
import { ActivatedRoute } from "@angular/router";
import { SlideProviderService } from "../../services/providers/slidesController/slide-provider.service";
import { Slide } from "src/app/core/models/slides.model";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";


@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"],
})
export class SlidesComponent implements OnInit {
  
  idSlide: any;
  lastSlide: Slide = <Slide>{};
  constructor(
    private sanitizer: DomSanitizer,
    private slideP: SlideProviderService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.idSlide = id;
    if (id != null) {
      this.slideP.getById(id).subscribe((response) => {
        this.slideSelected = <Slide>response;
        this.slideForm.reset({
          name: this.slideSelected.name,
          description: this.slideSelected.description,
          image: this.slideSelected.image,
          order: this.slideSelected.order,
        });
        this.imageEmpty = false;
        this.title = "Modificar Slide";
      });
    } else {
      
      this.imageEmpty = true;
    }
  }

  @Input() slideSelected: Slide = <Slide>{};
  slideSubmit: Slide = <Slide>{};
  imageEmpty = true;
  submitted = false;
  errorAlert: boolean = false;
  error: string = "";
  title: string = "Crear Slide";
  slideForm = new FormGroup({
    name: new FormControl(
      Object.keys(this.slideSelected).length === 0
        ? ""
        : this.slideSelected.name,
      [Validators.required]
    ),
    description: new FormControl(
      Object.keys(this.slideSelected).length === 0
        ? ""
        : this.slideSelected.description
    ),
    image: new FormControl(
      Object.keys(this.slideSelected).length === 0
        ? ""
        : this.slideSelected.image,
      Validators.required
    ),
    order: new FormControl(
      Object.keys(this.slideSelected).length === 0
        ? ""
        : this.slideSelected.order,
      Validators.required
    ),
  });

  // --------Config CKEditor-------
  public Editor = ClassicEditor;
  public editorData =
    Object.keys(this.slideSelected).length === 0
      ? ""
      : this.slideSelected.description;
  public config = {
    class: "text",
    placeholder: "Ingrese la descripcion de la actividad",
  };
  // ------------------------------

  get slideFormControl() {
    return this.slideForm.controls;
  }

  validateControlForSpacing(control: AbstractControl) {
    if (control.valid || control.untouched) {
      return true;
    } else {
      return false;
    }
  }

  validateControlForText(control: AbstractControl) {
    return (control.touched || this.submitted) && control.invalid;
  }

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.slideForm.value.description = data;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.imageEmpty = false;
        return this.slideFormControl.image.setValue(fileReader.result);
      };
      fileReader.readAsDataURL(imageFile);
    }
  }
  nothingSelected() {
    this.slideFormControl.image.setValue("");
    this.imageEmpty = true;
  }

  submitSlide() {
    this.slideSubmit = <Slide>{};
    this.submitted = true;
    if (this.slideForm.valid) {
      this.slideSubmit = {
        id: this.slideSelected.id,
        name: this.slideFormControl.name.value,
        description: this.slideFormControl.description.value,
        image: "",
        user_id: null,
        order: this.slideFormControl.order.value,
        created_at: "",
        updated_at: "",
        deleted_at: "",
        group_id: 0,
      };
      if (Object.keys(this.slideSelected).length === 0) {
        this.slideSubmit.id = this.lastSlide.id + 1;
        this.slideSubmit.image = this.slideFormControl.image.value;
        const slide: Slide = this.slideSubmit;
        this.slideP.postSlide(this.slideSubmit).subscribe({
          next: (response:any) => {
            this.openDialog("Slide creada", "Su slide ha sido creada con éxito", "success")
          },
          error: (error) => {
            this.openDialog("Error",error.message,"error")
          }
        });
      } else {
        this.slideSubmit.id = this.slideSelected.id;
        this.slideSubmit.image = this.slideFormControl.image.value;
        this.slideSubmit.user_id = this.slideSelected.user_id;        
        this.slideSubmit.created_at = this.slideSelected.created_at;
        this.slideSubmit.updated_at = this.slideSelected.updated_at;
        this.slideSubmit.deleted_at = this.slideSelected.deleted_at;
        this.slideSubmit.group_id = this.slideSelected.group_id;
        if (this.slideFormControl.image.value == this.slideSelected.image) {
          const string: string = this.slideSelected.image;
          this.toDataURL(
            "https://cors-anywhere.herokuapp.com/" + string,
            (base64) => {
              this.slideForm.controls.image.setValue(base64);
              this.slideSubmit.image = this.slideFormControl.image.value;
              const slide = this.slideSubmit;
              this.slideP.modificarSlide(this.idSlide,slide).subscribe({next: (response:any) => {
                console.log(slide)
                this.openDialog("Slide Modificada", "Su slide ha sido modificada con éxito", "success")
              },
              error: (error)=>{
                this.openDialog("Error",error.message,"error")
              }})
            }
          );
        } else {
          this.slideSubmit.image = this.slideFormControl.image.value;
          const slide = this.slideSubmit;
          this.slideP.modificarSlide(this.idSlide,slide).subscribe({next: (response:any) => {
            console.log(slide)
            this.openDialog("Slide Modificada", "Su slide ha sido modificada con éxito", "success")
          },
          error: (error)=>{
            this.openDialog("Error",error.message,"error")
          }})
        }
      }
    }
  }

  
  cancelAction() {}
  openDialog(title: String, description: any, value: String) {
    this.dialog.open(DialogComponent, {
      data: {
        title: title,
        description: description,
        value: value,
      },
    });
  }
  toDataURL(
    url: string,
    callback: (arg0: string | ArrayBuffer | null) => void
  ) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
  disableControls() {
    this.slideFormControl.name.disable();
  }
}
  