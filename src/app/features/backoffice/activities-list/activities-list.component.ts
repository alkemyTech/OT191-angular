import { Component, Input, OnInit, ViewChild } from "@angular/core";

import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { IActivities, IActivity } from "src/app/core/models/activity.model";

@Component({
	selector: "app-activities-list",
	templateUrl: "./activities-list.component.html",
	styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
	@ViewChild("dt") dt: Table | undefined;

	constructor(
		private activityController: ActivitiesControllerService,
		private messageService: MessageService,
		private confirmationService: ConfirmationService
	) {}
	@Input() listActivities: IActivities = {
		success: true,
		data: [
			{
				id: 1753,
				name: "Taller Arte y Cuentos",
				slug: null,
				description:
					"<p>Taller literario y de manualidades que se realiza permanentemente.</p>",
				image: "http://ongapi.alkemy.org/storage/SbltJhWv08.jpg",
				user_id: null,
				category_id: null,
				created_at: "2022-04-16T22:42:39.000000Z",
				updated_at: "2022-04-16T22:42:39.000000Z",
				deleted_at: null,
				group_id: 42,
			},
			{
				id: 1754,
				name: "Paseos Recreativos y Educativos",
				slug: null,
				description:
					"<p>Estos paseos están pensados para promover la participación y sentido de permanencia de los niños, niñas y adolescentes del área educativa.</p>",
				image: "http://ongapi.alkemy.org/storage/PdZu0HAd5N.jpg",
				user_id: null,
				category_id: null,
				created_at: "2022-04-16T22:43:11.000000Z",
				updated_at: "2022-04-16T22:43:11.000000Z",
				deleted_at: null,
				group_id: 42,
			},
		],
		message: "",
	};

	activityDialog: boolean = false;

	activities: IActivities = <IActivities>{
		success: true,
		data: [],
		message: "",
	};

	activity: IActivity = <IActivity>{};

	selectedActivities: IActivities = <IActivities>{
		success: false,
		data: [],
		message: "",
	};

	submitted: boolean = false;

	ngOnInit() {
		this.activityController
			.getActivities("/activities", null)
			.subscribe((response) => {
				this.activities = response;
			});
	}

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
				this.activities.data = this.activities.data.filter(
					(val) => !this.selectedActivities.data.includes(val)
				);
				this.selectedActivities = <IActivities>{
					success: false,
					data: [],
					message: "",
				};
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
				this.activities.data = this.activities.data.filter(
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
