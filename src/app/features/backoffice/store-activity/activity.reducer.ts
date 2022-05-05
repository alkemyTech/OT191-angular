import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { IActivity } from "src/app/core/models/activity.model";
import {
	loadActivities,
	loadActivitiesSuccess,
	updateActivitySuccess,
} from "./activity.actions";

export const initialState: IActivity[] = [];

export const activityReducer = createReducer(
	initialState,
	on(loadActivitiesSuccess, (state, { activities }) => {
		return state.concat(activities);
	}),
	on(updateActivitySuccess, (state, { activity }) => {
		return state.concat(activity);
	})
);
