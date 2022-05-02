import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { ICategory } from "src/app/core/models/category.model";

@Component({
	selector: "app-categories",
	templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
	constructor(private http: HttpClient, private fb: FormBuilder) {}

	@Input() categorySelected: ICategory = {
		id: 0,
		name: "",
		description: "",
		image: "",
	};
	submitted = false;
	title = "Crear categoria";
	imageEmpty = false;
	categoryForm = new FormGroup({
		name: new FormControl(
			this.categorySelected.name != "" ? this.categorySelected.name : "",
			[Validators.required, Validators.minLength(4)]
		),
		description: new FormControl(
			this.categorySelected.description != ""
				? this.categorySelected.description
				: "",
			Validators.required
		),
		image: new FormControl(
			this.categorySelected.image != "" ? this.categorySelected.image : "",
			Validators.required
		),
	});

	// --------Config CKEditor-------
	public Editor = ClassicEditor;
	public editorData =
		this.categorySelected != undefined ? this.categorySelected.description : "";
	public config = {
		placeholder: "Ingrese la descripcion de la categoria",
	};
	// ------------------------------

	get categoryFormControl() {
		return this.categoryForm.controls;
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

	nothingSelected() {
		this.categoryFormControl.image.setValue("");
		this.categorySelected.image = "";
		this.imageEmpty = true;
	}

	onChange({ editor }: ChangeEvent) {
		const data = editor.getData();
		this.categoryForm.value.description = data;
	}

	onFileSelected(event: any) {
		if (event.target.files && event.target.files[0]) {
			const imageFile = event.target.files[0];
			const fileReader = new FileReader();
			fileReader.onload = () => {
				this.imageEmpty = false;
				this.categorySelected.image = <string>fileReader.result;
				return this.categoryFormControl.image.setValue(fileReader.result);
			};
			fileReader.readAsDataURL(imageFile);
		}
	}

	submitCategory() {
		this.submitted = true;
		if (this.categoryForm.valid) {
		}
	}

	cancelAction() {}
}
