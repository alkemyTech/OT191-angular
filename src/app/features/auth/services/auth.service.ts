import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { of } from "rxjs";
import { map, tap } from "rxjs/operators";

import { User } from "src/app/core/models/user.model";
import { AlertService } from "src/app/core/services/alert.service";
import { BaseApiService } from "src/app/shared/services/base-api.service";

import { PrivateApiService } from "../../backoffice/services/private-api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token: string = "";
  private loggedIn = false;

  constructor(
    private baseApi: BaseApiService,
    private privateApi: PrivateApiService,
    private router: Router,
    private alert: AlertService
  ) {}

  login(user: User | Partial<User>) {
    return this.baseApi
      .post("/login", user)
      .pipe(tap((res: any) => (this.token = res.token)));
  }

  register(user: User | Partial<User>) {
    return this.baseApi.post("/register", user);
  }

  verifyAuth() {
    return this.privateApi.get("/auth/me").pipe(
      map((res: any) => {
        return of(res.success);
      })
    );
  }

  askLogout() {
    this.alert.alertQuestion("¿Quiere cerrar sesion?",'Confirme para salir','question')
    .then((res) => {
      if (res.isConfirmed) {
        of(true)
      }
    });
    return of(false);
  }
  
  logout() {
    this.loggedIn = false;
    return of(true);
  }

  invalidAccess() {
    this.alert.alertNotification(
      "Acceso restringido",
      "No tiene permiso para acceder a esta area. ¡Debes ser un usuario válido!",
      "error"
    );
    this.router.navigate(["/auth/login"]);
  }
}
