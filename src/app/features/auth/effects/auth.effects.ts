import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";

import { map, exhaustMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

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
} from "../actions/auth.actions";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.Login),
      map((action) => action.payload),
      exhaustMap((auth) =>
        this.authService.login(auth).pipe(
          map((logged) => new LoginSuccess({ logged: true })),
          catchError((error) => of(new LoginFailure(error)))
        )
      )
    )
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
        tap(() => this.router.navigate(["/"]))
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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
