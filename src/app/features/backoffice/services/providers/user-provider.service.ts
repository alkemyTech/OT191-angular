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

  public getById(id: string): Observable<User> {
    return this.privateApiService.get("/users", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteUser(id: string) {
    return this.privateApiService.delete("/users", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public updateUser(id: string, user: User | Partial<User>) {
    return this.privateApiService.put("/users", id, user).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
