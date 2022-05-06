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
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addActivity, loadActivities, updateActivity } from "../store-activity/activity.actions";

@Component({
	selector: "app-activities",
	templateUrl: "./activities.component.html",
	styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
	activities$: Observable<any>;
	lastActivity:IActivity=<IActivity>{};
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private http: HttpClient,
		private fb: FormBuilder,
		private activityController: ActivitiesControllerService,
		private store: Store<{ activity: IActivity }>
	) {
		this.activities$ = store.select((state) => state.activity);
	}
	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		this.store.dispatch(loadActivities());
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
		}else{
			this.activities$.subscribe((data:IActivity[])=>{this.lastActivity=data[data.length-1]});
			this.imageEmpty = true;
		}
	}

	@Input() activitySelected: IActivity = <IActivity>{};
	imageEmpty = true;
	submitted = false;
	title: string = "Crear actividad";
	activityForm = new FormGroup({
		name: new FormControl(
			Object.keys(this.activitySelected).length === 0
				? ""
				: this.activitySelected.name,
			[Validators.required]
		),
		description: new FormControl(
			Object.keys(this.activitySelected).length === 0
				? ""
				: this.activitySelected.description
		),
		image: new FormControl(
			Object.keys(this.activitySelected).length === 0
				? ""
				: this.activitySelected.image,
			Validators.required
		),
	});

	// --------Config CKEditor-------
	public Editor = ClassicEditor;
	public editorData =
		Object.keys(this.activitySelected).length === 0
			? ""
			: this.activitySelected.description;
	public config = {
		class:"text",
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
		this.imageEmpty = true;
	}
	submitActivity() {
		this.submitted = true;
		if (this.activityForm.valid) {
			if (Object.keys(this.activitySelected).length === 0) {
				const activity: IActivity = {
					id: this.lastActivity.id+1,
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
				this.store.dispatch(addActivity({ activity }));
			} else {
				if (
					this.activityFormControl.image.value == this.activitySelected.image
				) {
					const string: string = this.activitySelected.image;
					this.toDataURL(
						"https://cors-anywhere.herokuapp.com/" + string,
						(base64) => {
							this.activityForm.controls.image.setValue(base64);
							const activity: IActivity = {
								id: this.activitySelected.id,
								name: this.changeValue(
									this.activityFormControl.name.value,
									this.activitySelected.name
								),
								slug: this.activitySelected.slug,
								description: this.changeValue(
									this.activityFormControl.description.value,
									this.activitySelected.description
								),
								image: this.activityFormControl.image.value,
								user_id: this.activitySelected.user_id,
								category_id: this.activitySelected.category_id,
								created_at: this.activitySelected.created_at,
								updated_at: this.activitySelected.updated_at,
								deleted_at: this.activitySelected.deleted_at,
								group_id: this.activitySelected.group_id,
							};
							this.store.dispatch(updateActivity({ activity }));
						}
					);
				} else {
					const activity: IActivity = {
						id: this.activitySelected.id,
						name: this.changeValue(
							this.activityFormControl.name.value,
							this.activitySelected.name
						),
						slug: this.activitySelected.slug,
						description: this.changeValue(
							this.activityFormControl.description.value,
							this.activitySelected.description
						),
						image: this.activityFormControl.image.value,
						user_id: this.activitySelected.user_id,
						category_id: this.activitySelected.category_id,
						created_at: this.activitySelected.created_at,
						updated_at: this.activitySelected.updated_at,
						deleted_at: this.activitySelected.deleted_at,
						group_id: this.activitySelected.group_id,
					};
					this.store.dispatch(updateActivity({ activity }));
				}
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

	toDataURL(
		url: string,
		callback: (arg0: string | ArrayBuffer | null) => void
	) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			var reader = new FileReader();
			reader.onloadend = function () {
				callback(reader.result);
			};
			reader.readAsDataURL(xhr.response);
		};
		xhr.open("GET", url);
		xhr.responseType = "blob";
		xhr.send();
	}
}
