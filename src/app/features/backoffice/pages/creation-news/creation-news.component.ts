import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataCategorie } from "src/app/core/Models/categorie.model";

@Component({
  selector: "app-creation-news",
  templateUrl: "./creation-news.component.html",
  styleUrls: ["./creation-news.component.scss"],
})
export class CreationNewsComponent implements OnInit {
  files: any;
  categorias!: DataCategorie[];

  formCreation: FormGroup = this.fb.group({
    titulo: ["", [Validators.required, Validators.minLength(4)]],
    contenido: ["", [Validators.required]],
    categoria: ["", [Validators.required]],
    img: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((data) => {
      this.categorias = data.data;
    });
  }

  sendCreation() {
    const form = this.formCreation.value;
  }

  reset() {
    this.formCreation.reset();
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
      this.formCreation.controls[value].errors &&
      this.formCreation.controls[value].touched
    );
  }
}
