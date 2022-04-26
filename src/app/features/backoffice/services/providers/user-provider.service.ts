import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PrivateApiService } from "../private-api.service";
import { User } from "../../../../core/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserProviderService {
  constructor(private privateApiService: PrivateApiService) {}

  public getUsers(): Observable<User[]> {
    return this.privateApiService.get("/users");
  }

  public getById(id: string): Observable<User> {
    return this.privateApiService.get("/users/" + id);
  }
}
