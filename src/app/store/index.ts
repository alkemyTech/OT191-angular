import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from '../features/auth/reducers/auth.reducer';
import * as fromLoginPage from '../features/auth/reducers/login-page.reducer';

interface AppState {
    auth: fromAuth.AuthState;
    loginPage: fromLoginPage.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
    auth: fromAuth.authReducer,
    loginPage: fromLoginPage.reducer,
};