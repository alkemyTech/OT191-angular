import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-edition-form",
  templateUrl: "./edition-form.component.html",
  styleUrls: ["./edition-form.component.scss"],
})
export class EditionFormComponent implements OnInit {
  files: any;

  formEdition: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    descripcion: ["", [Validators.required]],
    facebook: ["", [Validators.required]],
    instagram: ["", [Validators.required]],
    img: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendEdition() {
    const form = this.formEdition.value;
    console.log("mi form:", form);
  }

  reset() {
    this.formEdition.reset();
    this.files = "";
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

  isInvalid(value: string) {
    return (
      this.formEdition.controls[value].errors &&
      this.formEdition.controls[value].touched
    );
  }
}
