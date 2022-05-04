import { Component, Input, OnInit, ViewChild } from "@angular/core";

import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { IActivity } from "src/app/core/models/activity.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
	loadActivities,
	loadActivitiesSuccess,
} from "../store-activity/activity.actions";

@Component({
	selector: "app-activities-list",
	templateUrl: "./activities-list.component.html",
	styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
	@ViewChild("dt") dt: Table | undefined;
	activities$: Observable<any>;

	@Input() listActivities: IActivity[] = [];

	constructor(
		private messageService: MessageService,
		private confirmationService: ConfirmationService,
		private store: Store<{ activity: IActivity }>
	) {
		this.activities$ = store.select((state) => state.activity);
	}

	ngOnInit() {
		this.store.dispatch(loadActivities());
		this.activities$.subscribe((response) => {
			this.activities=<IActivity[]>response;
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
		//Falta agregar metodo para actualizar base de datos
		this.confirmationService.confirm({
			message: "Esta seguro de eliminar estas actividades?",
			header: "Confirmacion",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				this.activities = this.activities.filter(
					(val) => !this.selectedActivities.includes(val)
				);
				this.selectedActivities = [];
				this.messageService.add({
					severity: "success",
					summary: "Exitoso",
					detail: "Actividades eliminadas",
					life: 3000,
				});
			},
		});
	}

	deleteActivity(activity: any) {
		//Falta agregar metodo para actualizar base de datos
		this.confirmationService.confirm({
			message: "Esta seguro de eliminar la actividad " + activity.name + "?",
			header: "Confirmacion",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				this.activities = this.activities.filter(
					(val) => val.id !== activity.id
				);
				this.activity = <IActivity>{};
				this.messageService.add({
					severity: "success",
					summary: "Exitoso",
					detail: "Actividad eliminada",
					life: 3000,
				});
			},
		});
	}
}
