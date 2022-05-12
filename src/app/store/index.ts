import { ActionReducerMap } from "@ngrx/store";
import { IActivity } from "../core/models/activity.model";


import { SlideState } from "../core/models/slides.state";
import * as SlideReducer from '../store/slides/reducers/slides.reducer' ;
import * as fromAuth from '../store/auth/reducers/auth.reducer';
import * as fromLoginPage from '../store/auth/reducers/login-page.reducer';
import * as fromRegisterPage from '../store/auth/reducers/register-page.reducer';
import * as fromActivity from '../store/activities/reducers/activity.reducer';

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

