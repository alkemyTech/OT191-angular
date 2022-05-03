import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert.service";

import { PrivateApiService } from "src/app/features/backoffice/services/private-api.service";
import { ICategory } from "src/app/core/models/category.model";
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends PrivateApiService {

  constructor(private alerts: AlertService, http: HttpClient) {
    super(http);
  }

  options(): void {
      this.baseUrl = environment.categoriesApiURL;
  }

  public getCategories(): Observable<ICategory[]> {
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

  public getCategoryById(id: string | number): Observable<ICategory> {
    this.options();
    return super.get('', id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteCategory(id: string | number): Observable<ICategory> {
    this.options();
    return super.delete('', id.toString()).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public updateCategory(id: string | number, category: ICategory | Partial<ICategory>): Observable<ICategory> {
    this.options();
    return super.put('', id.toString(), category).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
