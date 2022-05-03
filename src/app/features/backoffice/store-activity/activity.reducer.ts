import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { IActivities } from "src/app/core/models/activity.model";
import { loadActivities, loadActivitiesSuccess, updateActivitySuccess } from "./activity.actions";


export const initialState: IActivities={success:false, data:[], message:""} ;

export const activityReducer = createReducer(
	initialState,
	on(loadActivitiesSuccess, (state, {activities}) => {return activities}),
	// on(updateActivitySuccess, (state, {activity})=>({...state, [activity.data]:activity.data}))
);
