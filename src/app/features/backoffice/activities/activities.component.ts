import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import { ActivatedRoute } from "@angular/router";
import { IActivity } from "src/app/core/models/activity.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

@Component({
	selector: "app-activities",
	templateUrl: "./activities.component.html",
	styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private http: HttpClient,
		private fb: FormBuilder,
		private activityController: ActivitiesControllerService
	) {}
	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		if (id != null) {
			this.activityController
				.getActivity("/activities", Number(id))
				.subscribe((response) => {
					this.activitySelected = response.data;
					this.activityForm.reset({
						name: this.activitySelected.name,
						description: this.activitySelected.description,
						image: this.activitySelected.image,
					});
					this.imageEmpty = false;
					this.title = "Modificar actividad";
				});
		}
	}
	@Input() activitySelected: IActivity = <IActivity>{};
	imageEmpty = false;
	submitted = false;
	title: string = "Crear actividad";
	activityForm = new FormGroup({
		name: new FormControl(
			this.activitySelected != <IActivity>{} ? this.activitySelected.name : "",
			[Validators.required]
		),
		description: new FormControl(
			this.activitySelected != <IActivity>{}
				? this.activitySelected.description
				: ""
		),
		image: new FormControl(
			this.activitySelected != <IActivity>{} ? this.activitySelected.image : "",
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
		this.activityForm.value.description = data;
	}

	onFileSelected(event: any) {
		if (event.target.files && event.target.files[0]) {
			const imageFile = event.target.files[0];
			const fileReader = new FileReader();

			fileReader.onload = () => {
				this.imageEmpty = false;
				return this.activityFormControl.image.setValue(fileReader.result);
			};
			fileReader.readAsDataURL(imageFile);
		}
	}
	nothingSelected() {
		this.activityFormControl.image.setValue("");
		this.activitySelected.image = "";
		this.imageEmpty = true;
	}
	submitActivity() {
		this.submitted = true;
		if (this.activityFormControl.image.value == "") {
			this.activityForm.controls.image.setValue(this.activitySelected.image);
		}
		if (this.activityForm.valid) {
			if (this.activitySelected.name != "") {
				const activity: IActivity = {
					id: this.activitySelected.id,
					name: this.changeValue(
						this.activityFormControl.name,
						this.activitySelected.name
					),
					slug: this.activitySelected.slug,
					description: this.changeValue(
						this.activityFormControl.description,
						this.activitySelected.description
					),
					image: this.changeValue(
						this.activityFormControl.image,
						this.activitySelected.image
					),
					user_id: this.activitySelected.user_id,
					category_id: this.activitySelected.category_id,
					created_at: this.activitySelected.created_at,
					updated_at: this.activitySelected.updated_at,
					deleted_at: this.activitySelected.deleted_at,
					group_id: this.activitySelected.group_id,
				};
				this.activityController.patchActivity(
					"/activities",
					activity.id,
					activity
				);
			}
		} else {
			const activity: IActivity = {
				id: 0,
				name: this.activityFormControl.name.value,
				slug: this.activitySelected.slug,
				description: this.activityFormControl.description.value,
				image: this.activityFormControl.image.value,
				user_id: null,
				category_id: null,
				created_at: "",
				updated_at: "",
				deleted_at: null,
				group_id: 0,
			};

			this.activityController.postActivity("/activities", activity).subscribe({
				next: (response) => {
					this.openDialog("Creacion con exito", response, "success");
				},
				error: (error) => {
					this.openDialog("Error en la creacion", error, "error");
				},
			});
		}
	}
	changeValue(formValue: any, initialValue: any) {
		if (formValue != initialValue) {
			return formValue;
		} else {
			return initialValue;
		}
	}
	openDialog(title: String, description: any, value: String) {
		this.dialog.open(DialogComponent, {
			data: {
				title: title,
				description: description,
				value: value,
			},
		});
	}
	cancelAction() {}
}
