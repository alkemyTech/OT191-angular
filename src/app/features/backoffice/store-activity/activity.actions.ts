import { createAction, props } from '@ngrx/store';
import { IActivities } from 'src/app/core/models/activity.model';

export const setActivities = createAction('[activities-list Component] activity', props<{activities: IActivities}>());

