import { Action } from '@ngrx/store';

import { User } from 'src/app/core/models/user.model';

import { Authenticate } from '../models/authentication.model';


export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFailure = '[Auth API] Login Failure',
  Logout = '[Auth] Confirm Logout',
  LogoutCancelled = '[Auth] Logout Cancelled',
  LogoutConfirmed = '[Auth] Logout Confirmed',
  LogoutComplete = '[Auth API] Logout Complete',
  Register = '[Register Page] Register',
  RegisterSuccess = '[Auth API] Register Success',
  RegisterFailure = '[Auth API] Register Failure',
  StateLogin = '[Auth] Select Auth'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Authenticate) {}
}

export class StateLogin implements Action {
  readonly type = AuthActionTypes.StateLogin;

  constructor(public payload: { logged: boolean }) {}
}



export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { logged: boolean }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutConfirmed implements Action {
  readonly type = AuthActionTypes.LogoutConfirmed;
}

export class LogoutCancelled implements Action {
  readonly type = AuthActionTypes.LogoutCancelled;
}

export class LogoutComplete implements Action {
  readonly type = AuthActionTypes.LogoutComplete;
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;

  constructor(public payload: Partial<User>) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;

  constructor(public payload: { logged: boolean }) {}
}

export class RegisterFailure implements Action {
  readonly type = AuthActionTypes.RegisterFailure;

  constructor(public payload: any) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutCancelled
  | LogoutConfirmed
  | LogoutComplete
  | Register
  | RegisterSuccess
  | RegisterFailure
  | StateLogin;