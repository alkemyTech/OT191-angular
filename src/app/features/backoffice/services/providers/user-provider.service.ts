import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert.service";

import { PrivateApiService } from "../private-api.service";
import { User } from "../../../../core/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserProviderService {
  constructor(
    private privateApiService: PrivateApiService,
    private alerts: AlertService
  ) {}

  public getUsers(): Observable<User[]> {
    return this.privateApiService.get("/users").pipe(
      map((data: any) => {
        return data.data;
      }),
      catchError((err: any) => {
        this.alerts.alertNotification("Error", err, "error");
        return of([]);
      })
    );
  }

  public getUserById(id: string | number): Observable<User> {
    return this.privateApiService.get("/users", id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteUser(id: string | number): Observable<User> {
    return this.privateApiService.delete("/users", id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public updateUser(id: string | number, user: User | Partial<User>): Observable<User> {
    return this.privateApiService.patch("/users", id.toString(), user).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
