import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert.service";

import { PrivateApiService } from "../../private-api.service";
import { Slide } from "src/app/core/models/slides.model";

@Injectable({
  providedIn: "root",
})
export class SlideProviderService {
  constructor(
    private privateApiService: PrivateApiService,
    private alerts: AlertService
  ) {}

  public getSlides(): Observable<Slide[]> {
    return this.privateApiService.get("/slides").pipe(
      map((data: any) => {
        return data.data;
      }),
      catchError((err: any) => {
        this.alerts.alertNotification("Error", err, "error");
        return of([]);
      })
    );
  }

  public getById(id: string): Observable<Slide> {
    return this.privateApiService.get("/slides", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteSlide(id: string) {
    return this.privateApiService.delete("/slides", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public createSlide(){
    return this.privateApiService.put("/slides").pipe(
      map((data:any)=>{
        return data.data
      })
    )
  }

  public updateSlide(id: string, user: Slide | Partial<Slide>) {
    return this.privateApiService.put("/slides", id, user).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
