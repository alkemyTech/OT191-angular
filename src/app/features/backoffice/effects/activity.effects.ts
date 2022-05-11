import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { forkJoin, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { IActivity, IActivityResponse } from "src/app/core/models/activity.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import {
	addActivity,
	addActivitySuccess,
	deleteActivity,
	deleteActivitySuccess,
	loadActivities,
	loadActivitiesSuccess,
	updateActivity,
	updateActivitySuccess,
} from "../actions/activity.actions";

@Injectable()
export class activityEffects {
	loadActivities$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadActivities),
			switchMap(() =>
				this.activityService.getActivities("/activities", null).pipe(
					map((data) => loadActivitiesSuccess({ activities: <IActivity[]>data.data })),
					catchError((error) => {
						this.openDialog(
							"Error en la carga de actividades",
							error.message,
							"error"
						);
						return of({
							type: "[activities Component] Error Activity",
							error: { error },
						});
					})
				)
			)
		)
	);

	updateActivity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(updateActivity),
			mergeMap(({ activity }) =>
				this.activityService
					.putActivity("/activities", activity.id, activity)
					.pipe(
						map((data:IActivityResponse) => {
							this.openDialog(
								"Actividad modificada con exito",
								"Actividad " +
									 activity.name +
									" fue modificada satisfactoriamente",
								"success"
							);
							return updateActivitySuccess({ activity: <IActivity>data.data });
						}),
						catchError((error) => {
							this.openDialog(
								"Error en la modificación",
								error.message,
								"error"
							);
							return of({
								type: "[activities Component] Error Activity",
								error: { error },
							});
						})
					)
			)
		)
	);

	addActivity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(addActivity),
			mergeMap(({ activity }) =>
				this.activityService.postActivity("/activities", activity).pipe(
					map((data) => {
						this.openDialog(
							"Actividad creada con exito",
							"Actividad " + activity.name + " fue creada satisfactoriamente",
							"success"
						);
						return addActivitySuccess({ activity: <IActivity>data.data });
					}),
					catchError((error) => {
						this.openDialog("Error en la creacion", error.message, "error");
						return of({
							type: "[activities Component] Error Activity",
							error: { error },
						});
					})
				)
			)
		)
	);

	deleteActivity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(deleteActivity),
			mergeMap(({ activity }) => {
				return this.activityService
					.deleteActivity("/activities", activity.id)
					.pipe(
						map((data) => {
							this.openDialog(
								"Actividad eliminada con exito",
								"Actividad " +
									activity.name +
									" fue eliminada satisfactoriamente",
								"success"
							);
							return deleteActivitySuccess({ activity: activity });
						}),
						catchError((error) => {
							this.openDialog(
								"Error en la eliminacion",
								error.message,
								"error"
							);
							return of({
								type: "[activities Component] Error Activity",
								error: { error },
							});
						})
					);
			})
		)
	);


	constructor(
		private actions$: Actions,
		private activityService: ActivitiesControllerService,
		public dialog: MatDialog
	) {}

	openDialog(title: String, description: any, value: String) {
		this.dialog.open(DialogComponent, {
			data: {
				title: title,
				description: description,
				value: value,
			},
		});
	}
}
