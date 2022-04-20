import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ICategory } from "./activities.interface";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";

@Component({
	selector: "app-activities",
	templateUrl: "./activities.component.html",
	styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
	constructor(private http: HttpClient, private fb: FormBuilder) {}

	ngOnInit(): void {}

	@Input() activitySelected: ICategory = {
		id: 0,
		name: "",
		description: "",
		pathImage: "",
	};

	submitted = false;
	activityForm = new FormGroup({
		name: new FormControl(
			this.activitySelected != undefined ? this.activitySelected.name : "",
			[Validators.required]
		),
		description: new FormControl(
			this.activitySelected != undefined
				? this.activitySelected.description
				: ""
		),
		image: new FormControl(
			this.activitySelected != undefined ? this.activitySelected.pathImage : "",
			Validators.required
		),
	});

	// --------Config CKEditor-------
	public Editor = ClassicEditor;
	public editorData =
		this.activitySelected != undefined ? this.activitySelected.description : "";
	public config = {
		placeholder: "Ingrese la descripcion de la actividad",
	};
	// ------------------------------

	get activityFormControl() {
		return this.activityForm.controls;
	}

	onChange({ editor }: ChangeEvent) {
		const data = editor.getData();
		this.activityForm.value.description = data;
	}

	onFileSelected(event: any) {
		let selectedFile = <File>event.target.files;
	}

	submitActivity() {
		this.submitted = true;
		if (this.activityForm.valid) {
		}
	}

	cancelAction() {}
}
