import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { urlValidator } from "./regExp.directive";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { IOrganization } from "src/app/core/models/organization.model";

@Component({
	selector: "app-edit-organization",
	templateUrl: "./edit-organization.component.html",
	styleUrls: ["./edit-organization.component.scss"],
})
export class EditOrganizationComponent {
	constructor(private http: HttpClient) {}

	@Input() organizationData: IOrganization = {
		name: "",
		logo: "",
		shortDescription: "",
		longDescription: "",
		links: {
			facebook: "",
			instagram: "",
			twitter: "",
		},
	};

	public autoResize: boolean = true;
	submitted: boolean = false;
	imageSource: any;
	logoEmpty = false;
	organizationForm = new FormGroup({
		name: new FormControl(this.organizationData.name, [Validators.required]),
		logo: new FormControl("", [Validators.required]),
		shortDescription: new FormControl(this.organizationData.shortDescription, [
			Validators.required,
		]),
		longDescription: new FormControl(this.organizationData.longDescription, [
			Validators.required,
		]),
		links: new FormGroup({
			facebook: new FormControl(this.organizationData.links.facebook, [
				Validators.required,
				urlValidator("www.facebook.com/"),
			]),
			instagram: new FormControl(
				this.organizationData.links.instagram,
				urlValidator("www.instagram.com/")
			),
			twitter: new FormControl(
				this.organizationData.links.twitter,
				urlValidator("www.twitter.com/")
			),
		}),
	});

	// // --------Config CKEditor-------
	public Editor = ClassicEditor;
	public editorData =
		this.organizationData != undefined
			? this.organizationData.longDescription
			: "";
	public config = {
		placeholder: "Descripcion corta de la organizacion",
	};
	// ------------------------------

	get organizationFormControl() {
		return this.organizationForm.controls;
	}
	get organizationFormLinksControl() {
		return (this.organizationForm.get("links") as FormGroup).controls;
	}
	onChange({ editor }: ChangeEvent) {
		const data = editor.getData();
		this.organizationForm.value.longDescription = data;
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
		this.organizationFormControl.logo.setValue("");
		this.logoEmpty = true;
	}
	onFileSelected(e: any): void {
		if (e.target.files && e.target.files[0]) {
			const imageFile = e.target.files[0];
			const fileReader = new FileReader();

			fileReader.onload = () => {
				this.logoEmpty = false;
				return this.organizationFormControl.logo.setValue(fileReader.result);
			};
			fileReader.readAsDataURL(imageFile);
		}
	}
	submitOrganization() {

		if (this.organizationFormControl.logo.value == "") {
			this.organizationForm.controls.logo.setValue(this.organizationData.logo);
		}
		if (this.organizationForm.valid) {

		}
	}
	cancelAction() {}
}
