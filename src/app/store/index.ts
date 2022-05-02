import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from '../features/auth/reducers/auth.reducer';
import * as fromLoginPage from '../features/auth/reducers/login-page.reducer';
import * as fromRegisterPage from '../features/auth/reducers/register-page.reducer';

interface AppState {
    auth: fromAuth.State;
    loginPage: fromLoginPage.State;
    registerPage: fromRegisterPage.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
    auth: fromAuth.authReducer,
    loginPage: fromLoginPage.reducer,
    registerPage: fromRegisterPage.reducer
};