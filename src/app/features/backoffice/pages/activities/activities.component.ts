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
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ActivitiesControllerService } from "../../services/activitiesController/activities-controller.service";
import {
	addActivity,
	loadActivities,
	updateActivity,
} from "../../../../store/activities/actions/activity.actions";

@Component({
	selector: "app-activities",
	templateUrl: "./activities.component.html",
	styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
	activities$: Observable<any>;
	lastActivity: IActivity = <IActivity>{};
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
					this.activitySelected = <IActivity>response.data;
					this.activityForm.reset({
						name: this.activitySelected.name,
						description: this.activitySelected.description,
						image: this.activitySelected.image,
					});
					this.imageEmpty = false;
					this.title = "Modificar actividad";
				});
		} else {
			this.activities$.subscribe((data: IActivity[]) => {
				this.lastActivity = data[data.length - 1];
			});
			this.imageEmpty = true;
		}
	}

	@Input() activitySelected: IActivity = <IActivity>{};
	activitySubmit: IActivity = <IActivity>{};
	imageEmpty = true;
	submitted = false;
	errorAlert: boolean = false;
	error: string = "";
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
		class: "text",
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
		this.activitySubmit = <IActivity>{};
		this.submitted = true;
		if (this.activityForm.valid) {
			this.activitySubmit = {
				id: this.activitySelected.id,
				name: this.activityFormControl.name.value,
				slug: null,
				description: this.activityFormControl.description.value,
				image: "",
				user_id: null,
				category_id: null,
				created_at: "",
				updated_at: "",
				deleted_at: "",
				group_id: 0,
			};
			if (Object.keys(this.activitySelected).length === 0) {
				this.activitySubmit.id=this.lastActivity.id + 1;
				this.activitySubmit.image= this.activityFormControl.image.value;
				const activity: IActivity = this.activitySubmit;
				this.store.dispatch(addActivity({ activity }));
			} else {
				this.activitySubmit.id=this.activitySelected.id;
				this.activitySubmit.slug=this.activitySelected.slug;
				this.activitySubmit.image= this.activityFormControl.image.value;
				this.activitySubmit.user_id= this.activitySelected.user_id;
				this.activitySubmit.category_id= this.activitySelected.category_id;
				this.activitySubmit.created_at= this.activitySelected.created_at;
				this.activitySubmit.updated_at= this.activitySelected.updated_at;
				this.activitySubmit.deleted_at= this.activitySelected.deleted_at;
				this.activitySubmit.group_id= this.activitySelected.group_id;
				if (
					this.activityFormControl.image.value == this.activitySelected.image
				) {
					const string: string = this.activitySelected.image;
					this.toDataURL(
						"https://cors-anywhere.herokuapp.com/" + string,
						(base64) => {
							this.activityForm.controls.image.setValue(base64);
							this.activitySubmit.image = this.activityFormControl.image.value;
							const activity = this.activitySubmit;
							this.store.dispatch(updateActivity({ activity }));
						}
					);
				} else {
					this.activitySubmit.image = this.activityFormControl.image.value;
					const activity = this.activitySubmit;
					this.store.dispatch(updateActivity({ activity }));
				}
			}
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
	disableControls() {
		this.activityFormControl.name.disable();
	  }
}
