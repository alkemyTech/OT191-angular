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

import { ActivatedRoute } from "@angular/router";
import { IActivity } from "src/app/core/models/activity.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { ActivitiesControllerService } from "../../services/activitiesController/activities-controller.service";

@Component({
	selector: "app-activities",
	templateUrl: "./activities.component.html",
	styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private fb: FormBuilder,
		private activityController: ActivitiesControllerService,
		public dialog: MatDialog
	) {}
	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		if (id != null) {
			this.activityController.getActivity("/activities", Number(id)).subscribe({
				next: (response) => {
					this.activitySelected = response;
					this.activityForm.reset({
						name: this.activitySelected.data.name,
						description: this.activitySelected.data.description,
						image: this.activitySelected.data.image,
					});
					this.imageEmpty = false;
					this.title = "Modificar actividad";
				},
				error: (error) => {
					this.errorAlert = true;
					this.error = error.message;
					this.openDialog("Error", this.error, "error");
				},
			});
		}
	}
	@Input() activitySelected: IActivity = {
		success: false,
		data: {
			id: 0,
			name: "",
			slug: null,
			description: "",
			image: "",
			user_id: null,
			category_id: null,
			created_at: "2022-04-16",
			updated_at: "2022-04-16T22:42:39.000000Z",
			deleted_at: null,
			group_id: 0,
		},
		message: " ",
	};
	imageEmpty = false;
	submitted = false;
	errorAlert: boolean = false;
	error: string = "";
	title: string = "Crear actividad";
	activityForm = new FormGroup({
		name: new FormControl(
			this.activitySelected != undefined ? this.activitySelected.data.name : "",
			[Validators.required]
		),
		description: new FormControl(
			this.activitySelected != undefined
				? this.activitySelected.data.description
				: ""
		),
		image: new FormControl(
			this.activitySelected != undefined
				? this.activitySelected.data.image
				: "",
			Validators.required
		),
	});

	// --------Config CKEditor-------
	public Editor = ClassicEditor;
	public editorData =
		this.activitySelected != undefined
			? this.activitySelected.data.description
			: "";
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
		this.activitySelected.data.image = "";
		this.imageEmpty = true;
	}
	submitActivity() {
		this.submitted = true;
		if (this.activityFormControl.image.value == "") {
			this.activityForm.controls.image.setValue(
				this.activitySelected.data.image
			);
		}
		if (this.activityForm.valid) {
			if (this.activitySelected.success) {
				const activity: IActivity = {
					success: true,
					data: {
						id: this.activitySelected.data.id,
						name: this.changeValue(
							this.activityFormControl.name,
							this.activitySelected.data.name
						),
						slug: this.activitySelected.data.slug,
						description: this.changeValue(
							this.activityFormControl.description,
							this.activitySelected.data.description
						),
						image: this.changeValue(
							this.activityFormControl.image,
							this.activitySelected.data.image
						),
						user_id: this.activitySelected.data.user_id,
						category_id: this.activitySelected.data.category_id,
						created_at: this.activitySelected.data.created_at,
						updated_at: this.activitySelected.data.updated_at,
						deleted_at: this.activitySelected.data.deleted_at,
						group_id: this.activitySelected.data.group_id,
					},
					message: "",
				};
				this.activityController
					.patchActivity("/activities", activity.data.id, activity)
					.subscribe({
						next: (response) => {
							this.openDialog("Modificacion con exito", response, "success");
						},
						error: (error) => {
							this.openDialog("Error en la modificacion", error, "error");
						},
					});
			} else {
				const activity: IActivity = {
					success: true,
					data: {
						id: 0,
						name: this.activityFormControl.name.value,
						slug: this.activitySelected.data.slug,
						description: this.activityFormControl.description.value,
						image: this.activityFormControl.image.value,
						user_id: null,
						category_id: null,
						created_at: "",
						updated_at: "",
						deleted_at: null,
						group_id: 0,
					},
					message: "",
				};

				this.activityController
					.postActivity("/activities", activity)
					.subscribe({
						next: (response) => {
							this.openDialog("Creacion con exito", response, "success");
						},
						error: (error) => {
							this.openDialog("Error en la creacion", error, "error");
						},
					});
			}
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
