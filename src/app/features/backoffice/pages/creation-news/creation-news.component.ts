import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-creation-news",
  templateUrl: "./creation-news.component.html",
  styleUrls: ["./creation-news.component.scss"],
})
export class CreationNewsComponent implements OnInit {
  files: any;

  formCreation: FormGroup = this.fb.group({
    titulo: ["", [Validators.required, Validators.minLength(6)]],
    contenido: ["", [Validators.required]],
    categoria: ["", [Validators.required]],
    img: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendCreation() {
    const form = this.formCreation.value;
    console.log(form);
  }

  onSelectFile(img: any) {
    if (img.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]);
      reader.onload = (event: any) => {
        this.files = event.target.result;
      };
    }
  }
}
function titulo(titulo: any): import("@angular/forms").AbstractControl {
  throw new Error("Function not implemented.");
}
