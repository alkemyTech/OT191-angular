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
        "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
      }),
    };
  }

  public get<T>(path: string, id: string = ''): Observable<T> {
    this.options();
    return id.length > 0 ? super.get<T>(path + '/' + id) : super.get<T>(path);
  }
  //esta Hecho
  public post<T>(path: string, body: any): Observable<T> {
    this.options();
    return super.post<T>(path, body);
  }


  public put<T>(path: string, id: string = '',  body: any = {}): Observable<T> {
    this.options();
    return id.length > 0 ? super.put<T>(path + '/' + id, body) : super.put<T>(path, body);
  }

  public patch<T>(path: string, id: string = '',  body: any = {}): Observable<T> {
    this.options();
    return id.length > 0 ? super.patch<T>(path + '/' + id, body) : super.patch<T>(path, body);
  }


  public delete<T>(path: string, id: string = ''): Observable<T> {
    this.options();
    return id.length > 0 ? super.delete<T>(path + '/' + id) : super.delete<T>(path);
  }
}
