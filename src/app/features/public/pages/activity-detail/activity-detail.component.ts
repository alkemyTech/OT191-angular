import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IActivity } from "src/app/core/models/activity.model";
import { ActivitiesControllerService } from "src/app/features/backoffice/services/activitiesController/activities-controller.service";

@Component({
	selector: "app-activity-detail",
	templateUrl: "./activity-detail.component.html",
	styleUrls: ["./activity-detail.component.scss"],
})
export class ActivityDetailComponent implements OnInit {
	activitySelected: IActivity = <IActivity>{};
  title: string="";
	constructor(
		private route: ActivatedRoute,
		private activityController: ActivitiesControllerService
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		if (id != null) {
			this.activityController
				.getActivity("/activities", Number(id))
				.subscribe((response) => {
					this.activitySelected = <IActivity>response.data;
					this.title = this.activitySelected.name;
				});
		}
	}
}
