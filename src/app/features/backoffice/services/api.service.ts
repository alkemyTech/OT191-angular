import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ObjectCategoria } from "src/app/core/Models/categorie.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  dataApi = environment.api;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const url = `${this.dataApi}/categories`;
    return this.http.get<ObjectCategoria>(url);
  }
}
