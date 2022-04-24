import { Component, Input, OnInit } from "@angular/core";
import { IActivity } from "../backoffice.interface";
import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
	selector: "app-activities-list",
	templateUrl: "./activities-list.component.html",
	styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
    
    constructor(private activityController: ActivitiesControllerService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
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

	activityDialog: boolean=false;

    activities: IActivity[]=[];

    activity: IActivity=<IActivity>{};

    selectedActivities: IActivity[]=[];

    submitted: boolean=false;


    ngOnInit() {
        this.activityController.getActivities('/activities', null).subscribe(data => this.activities = data);

    }

    openNew() {
		console.log("redireccionar a /create")
    }

    // deleteSelectedProducts() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete the selected products?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.activities = this.activities.filter(val => !this.selectedActivities.includes(val));
    //             this.selectedActivities = [];
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //         }
    //     });
    // }

    // editProduct(activity: IActivity) {
    //     this.activity = {...activity};
    //     this.activityDialog = true;
    // }

    // deleteProduct(activity: IActivity) {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete ' + activity.name + '?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.activities = this.activities.filter(val => val.id !== activity.id);
    //             this.activity = <IActivity>{};
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    //         }
    //     });
    // }

}

