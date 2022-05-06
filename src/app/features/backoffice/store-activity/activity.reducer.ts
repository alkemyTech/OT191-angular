import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { IActivity } from "src/app/core/models/activity.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import {
	addActivitySuccess,
	errorActivity,
	loadActivitiesSuccess,
	updateActivitySuccess,
} from "./activity.actions";

export const initialState: IActivity[] = [];

export const activityReducer = createReducer(
	initialState,
	on(loadActivitiesSuccess, (state, { activities }) => {
		return activities;
	}),
	on(updateActivitySuccess, (state:IActivity[],  {activity}) => {
		let activities:IActivity[]=state.filter(element=>element.id!=activity.id);
		activities.push(activity);
		activities.sort((a,b)=> a.id-b.id);
		return activities;
	}),
	on(addActivitySuccess, (state, { activity }) => {
		return [...state, activity];
	}),
	on(errorActivity, (state,{error})=>{
		console.log(error)
		return error		
	}),

);
