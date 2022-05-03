import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { IActivities } from "src/app/core/models/activity.model";
import { setActivities } from "./activity.actions";


export const initialState: IActivities={success:false, data:[], message:""} ;

export const activityReducer = createReducer(
	initialState,
	on(setActivities, (state, {activities}) => {return activities}),
);
