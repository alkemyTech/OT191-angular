import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../../../shared/services/base-api.service";

@Injectable({
  providedIn: "root",
})
export class PrivateApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  options() {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") || "",
      }),
    };
  }

  public get<T>(path: string): Observable<T> {
    this.options();
    return super.get<T>(path);
  }
  //esta Hecho
  public post<T>(path: string, body: any): Observable<T> {
    this.options();
    return super.post<T>(path, body);
  }

  public put<T>(path: string, body: any): Observable<T> {
    this.options();
    return super.put<T>(path, body);
  }

  //
  public delete<T>(path: string, id: string = ''): Observable<T> {
    this.options();
    return super.delete<T>(path  + '/' + id);
  }
}
