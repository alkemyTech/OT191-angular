import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert.service";

import { PrivateApiService } from "../private-api.service";
import { User } from "../../../../core/models/user.model";
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class UserProviderService extends PrivateApiService {
  constructor(private alerts: AlertService, http: HttpClient) {
    super(http);
  }

  options(): void {
      this.baseUrl = environment.usersApiURL;
  }

  public getUsers(): Observable<User[]> {
    this.options();
    return super.get('').pipe(
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
    this.options();
    return super.get('', id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteUser(id: string | number): Observable<User> {
    this.options();
    return super.delete('', id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public updateUser(id: string | number, user: User | Partial<User>): Observable<User> {
    this.options();
    return super.put('', id.toString(), user).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
