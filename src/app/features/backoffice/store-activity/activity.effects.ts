import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { IActivity } from "src/app/core/models/activity.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { ActivitiesControllerService } from "../services/activitiesController/activities-controller.service";
import {
	addActivity,
	addActivitySuccess,
	loadActivities,
	loadActivitiesSuccess,
	updateActivity,
	updateActivitySuccess,
} from "./activity.actions";

@Injectable()
export class activityEffects {
	loadActivities$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadActivities),
			switchMap(() =>
				this.activityService.getActivities("/activities", null).pipe(
					map((data) => loadActivitiesSuccess({ activities: data.data })),
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
						map((data) => {
							this.openDialog(
								"Actividad modificada con exito",
								"Actividad " + data.data.name + " fue modificada satisfactoriamente",
								"success"
							);
							return updateActivitySuccess({ activity: data.data })}),
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
							"Actividad " + data.data.name + " fue creada satisfactoriamente",
							"success"
						);
						return addActivitySuccess({ activity: data.data });
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
