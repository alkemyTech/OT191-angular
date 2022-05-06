import { createAction, props } from '@ngrx/store';
import { IActivity } from 'src/app/core/models/activity.model';

export const loadActivities = createAction('[activities-list Component] Load Activity');
export const loadActivitiesSuccess = createAction('[activities-list Component] Load Activity success', props<{activities: IActivity[]}>());
export const updateActivity=createAction('[activities Component] Update Activity', props<{activity:IActivity}>());
export const updateActivitySuccess=createAction('[activities Component] Update Activity success', props<{activity:IActivity;}>());
export const addActivity=createAction('[activities Component] Add Activity', props<{activity:IActivity}>());
export const addActivitySuccess=createAction('[activities Component] Add Activity success', props<{activity:IActivity}>());
export const errorActivity=createAction('[activities Component] Error Activity', props<{error:any}>());



