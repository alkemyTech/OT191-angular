import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { IActivities, IActivity } from "src/app/core/models/activity.model";
import { BaseApiService } from "src/app/shared/services/base-api.service";



@Injectable({
	providedIn: "root",
})
export class ActivitiesControllerService {
	constructor(public baseHttp: BaseApiService) {}

	getActivities(destinationRoute: string, id: null): Observable<IActivities> {
		return this.baseHttp.getApi(destinationRoute, id);
	}
	getActivity(destinationRoute: string, id: number): Observable<IActivity> {
		return this.baseHttp.getApi(destinationRoute, id);
	}
	patchActivity(destinationRoute: string, id: number, activity: IActivity) {
		return this.baseHttp.patch(destinationRoute + "/" + id, activity.data);
	}
	deleteActivity(destinationRoute: string, id: number) {
		return this.baseHttp.delete("/" + destinationRoute + "/" + id);
	}
	postActivity(destinationRoute: string, activity: IActivity) {
		return this.baseHttp.post(destinationRoute, activity.data);
	}
}
