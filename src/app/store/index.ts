import { ActionReducerMap } from "@ngrx/store";
import { IActivity } from "../core/models/activity.model";


import { SlideState } from "../core/models/slides.state";
import * as SlideReducer from '../features/backoffice/state/reducers/slides.reducer' ;
import * as fromAuth from '../features/auth/reducers/auth.reducer';
import * as fromLoginPage from '../features/auth/reducers/login-page.reducer';
import * as fromRegisterPage from '../features/auth/reducers/register-page.reducer';
import * as fromActivity from '../features/backoffice/reducers/activity.reducer';

export interface AppState {
    auth: fromAuth.State;
    loginPage: fromLoginPage.State;
    registerPage: fromRegisterPage.State;
    slides: SlideState;
    activity:IActivity[];
}

export const reducers: ActionReducerMap<AppState, any> = {
    auth: fromAuth.authReducer,
    loginPage: fromLoginPage.reducer,
    registerPage: fromRegisterPage.reducer,
    slides: SlideReducer.slidesReducer,
    activity: fromActivity.activityReducer,
}

