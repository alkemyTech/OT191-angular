import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, exhaustMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

import { AlertService } from 'src/app/core/services/alert.service';

import {
  AuthActions,
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutConfirmed,
  LogoutComplete,
  LogoutCancelled,
  Register,
  RegisterSuccess,
  RegisterFailure,
} from "../actions/auth.actions";
import { AuthService } from "../services/auth.service";


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private alerts: AlertService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.Login),
      map((action) => action.payload),
      exhaustMap((auth) =>
        this.authService.login(auth).pipe(
          map((res) => new LoginSuccess({logged: true})),
          catchError((error) => {
            return of(new LoginFailure(error))})
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Register>(AuthActionTypes.Register),
      map((action) => action.payload),
      exhaustMap((auth) =>
        this.authService.register(auth).pipe(
          map((res) => new RegisterSuccess({logged: true})),
          catchError((error) => {
            return of(new RegisterFailure(error))})
        )
      )
    )
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
        tap((response) => {this.router.navigate(["/"]);
          console.log(response.payload.logged);
          return response.payload.logged;
      })
      ),
    { dispatch: false }
  );

  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Logout>(AuthActionTypes.Logout),
      exhaustMap(() =>
        this.authService.askLogout().pipe(
          map((confirmed) => {
            if (confirmed) {
              return new LogoutConfirmed();
            } else {
              return new LogoutCancelled();
            }
          })
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LogoutConfirmed>(AuthActionTypes.LogoutConfirmed),
        exhaustMap((auth) =>
          this.authService.logout().pipe(
            tap(() => this.router.navigate(["/login"])),
            map(() => new LogoutComplete()),
            catchError(() => of(new LogoutComplete()))
          )
        )
      ),
    { dispatch: false }
  );

  // statelogged$ = createEffect(()=>this.actions$.pipe(ofType<StateLogin>(AuthActionTypes.)))
}
