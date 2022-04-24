import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { ICategory } from "../backoffice.interface";

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
		pathImage: "",
	};
	submitted = false;
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
			this.categorySelected.pathImage != ""
				? this.categorySelected.pathImage
				: "",
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

	onChange({ editor }: ChangeEvent) {
		const data = editor.getData();
		this.categoryForm.value.description = data;
	}

	onFileSelected(event: any) {
		let selectedFile = <File>event.target.files;
	}

	submitCategory() {
		this.submitted = true;
		if (this.categoryForm.valid) {
		}
	}

	cancelAction() {}
}
