import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { deleteActivity, loadActivities } from "../../../../store/activities/actions/activity.actions";
import {  IActivity } from "src/app/core/models/activity.model";
import { ActivitiesControllerService } from "../../services/activitiesController/activities-controller.service";

@Component({
	selector: "app-activities-list",
	templateUrl: "./activities-list.component.html",
	styleUrls: ["./activities-list.component.scss"],
	providers:[ConfirmationService, MessageService]
})
export class ActivitiesListComponent implements OnInit {
	@ViewChild("dt") dt: Table | undefined;
	activities$: Observable<any>;

	@Input() listActivities: IActivity[] = [];

	constructor(
		private confirmationService: ConfirmationService,
		private store: Store<{ activity: IActivity }>
	) {
		this.activities$ = store.select((state) => state.activity);
		this.store.dispatch(loadActivities());
	}

	ngOnInit() {
		this.activities$.subscribe((response) => {
			this.activities = <IActivity[]>response;
		});
	}

	activityDialog: boolean = false;

	activities: IActivity[] = [];
	activity: IActivity = <IActivity>{};

	selectedActivities: IActivity[] = [];

	submitted: boolean = false;

	applyFilterGlobal($event: any, stringVal: string) {
		this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
	}

	deleteSelectedActivities() {
		this.confirmationService.confirm({
			message: "Esta seguro de eliminar estas actividades?",
			header: "Confirmacion",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				this.activities = this.activities.filter(
					(val) => !this.selectedActivities.includes(val)
				);
				this.selectedActivities.forEach((activity) => {
					this.store.dispatch(deleteActivity({ activity }));
				});
				this.selectedActivities = [];
			},
		});
	}

	deleteActivity(activity: IActivity) {
		this.confirmationService.confirm({
			message: "Esta seguro de eliminar la actividad " + activity.name + "?",
			header: "Confirmacion",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				this.activities = this.activities.filter(
					(val) => val.id !== activity.id
				);
				this.store.dispatch(deleteActivity({ activity }));
				this.activity = <IActivity>{};
			},
		});
	}
}
