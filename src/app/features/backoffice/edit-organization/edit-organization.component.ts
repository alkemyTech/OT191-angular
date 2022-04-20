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

@Component({
	selector: "app-edit-organization",
	templateUrl: "./edit-organization.component.html",
	styleUrls: ["./edit-organization.component.scss"],
})
export class EditOrganizationComponent {
	constructor() {}

  // @Input() activitySelected: IOrganization = {
	// 	id: 0,
	// 	name: "",
	// 	description: "",
	// 	pathImage: "",
	// };

	public autoResize: boolean = true;
	submitted: boolean = false;
	organizationForm = new FormGroup({
		name: new FormControl("", [Validators.required]),
		logo: new FormControl("", [Validators.required]),
		shortDescription: new FormControl("", [Validators.required]),
		longDescription: new FormControl("", [Validators.required]),
		links: new FormGroup({
			facebook: new FormControl("", [
				Validators.required,
				urlValidator("www.facebook.com"),
			]),
			instagram: new FormControl("", urlValidator("www.instagram.com")),
			twitter: new FormControl("", urlValidator("www.twitter.com")),
		}),
	});


	// // --------Config CKEditor-------
	// public Editor = ClassicEditor;
	// public editorData =
	// 	this.activitySelected != undefined ? this.organizationForm.longDescription : "";
	// public config = {
	// 	placeholder: "Ingrese la descripcion de la actividad",
	// };
	// // ------------------------------


  get organizationFormControl() {
		return this.organizationForm.controls;
	}
	get organizationFormLinksControl() {
		return (this.organizationForm.get("links") as FormGroup).controls;
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

	onFileSelected(event: any) {
		let selectedFile = <File>event.target.files;
	}
	submitOrganization() {
		console.log("hola");
		console.log(this.organizationForm.value);
	}
	cancelAction() {}
}
