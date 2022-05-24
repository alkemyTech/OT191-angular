import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { IActivity, IActivityResponse } from "src/app/core/models/activity.model";
import { BaseApiService } from "src/app/shared/services/base-api.service";

@Injectable({
	providedIn: "root",
})
export class ActivitiesControllerService {
	constructor(public baseHttp: BaseApiService) {}

	getActivities(destinationRoute: string, id: null): Observable<IActivityResponse> {
		return this.baseHttp.getApi(destinationRoute, id);
	}
	getActivity(destinationRoute: string, id: number): Observable<IActivityResponse> {
		return this.baseHttp.getApi(destinationRoute, id);
	}
	putActivity(destinationRoute: string, id: number, activity: IActivity): Observable<IActivityResponse> {
		return this.baseHttp.put(destinationRoute + "/" + id, activity);
	}
	deleteActivity(destinationRoute: string, id: number):Observable<IActivityResponse>{
		return this.baseHttp.delete(destinationRoute + "/" + id);
	}
	postActivity(destinationRoute: string, activity: IActivity): Observable<IActivityResponse> {
		return this.baseHttp.post(destinationRoute, activity);
	}
}
