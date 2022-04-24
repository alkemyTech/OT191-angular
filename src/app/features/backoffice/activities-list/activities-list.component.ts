import { Component, Input, OnInit } from "@angular/core";
import { IActivity } from "../backoffice.interface";

@Component({
	selector: "app-activities-list",
	templateUrl: "./activities-list.component.html",
	styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent {
	constructor() {}

	@Input() listActivities: IActivity[] = [
		{
			id: 1,
			name: "prueba",
			description: "descripcion prueba",
			pathImage: "prueba",
		},
		{
			id: 2,
			name: "prueba2",
			description: "descripcion prueba2",
			pathImage: "prueba2",
		},
		{
			id: 3,
			name: "prueba3",
			description: "descripcion prueba3",
			pathImage: "prueba3",
		},
	];
}
