import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { IActivity } from "src/app/core/models/activity.model";
import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import { loadActivities, loadActivitiesSuccess, updateActivity, updateActivitySuccess } from "./activity.actions";

@Injectable()
export class activityEffects {
	loadActivities$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadActivities),
			switchMap(() =>
				this.activityService
					.getActivities("/activities", null)
					.pipe(map((data) => loadActivitiesSuccess({ activities: data })))
			)
		)
	);
    
    // updateActivity$ = createEffect(() => this.actions$.pipe(
    //     ofType(updateActivity),
    //     switchMap(() => this.activityService.patchActivity("/activities",1,).pipe(
    //       map(data => updateActivitySuccess({activity: data}))
    //     ))
    //   ));

	constructor(
		private actions$: Actions,
		private activityService: ActivitiesControllerService
	) {}
}
