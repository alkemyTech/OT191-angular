import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert.service";

import { PrivateApiService } from "../../private-api.service";
import { Slide, SlideResponse } from "src/app/core/models/slides.model";
import { Store } from "@ngrx/store";
import { BaseApiService } from "src/app/shared/services/base-api.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";


@Injectable({
  providedIn: "root",
})
export class SlideProviderService {
  constructor(
    private privateApiService: PrivateApiService,
    private baseApi: BaseApiService,
    private alerts: AlertService,
    private store: Store,
    private dialog: MatDialog,
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

  public modificarSlide(id:string, slide:Slide):Observable<SlideResponse>{
    return this.privateApiService.put("/slides",id,slide);
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

  public createSlide(slide:Slide | Partial<Slide>):Observable<SlideResponse>{
    return this.baseApi.post<SlideResponse>("/slides", slide);
  }

  public updateSlide(id: string, slide: Slide | Partial<Slide>) {
    return this.privateApiService.put("/slides", id, slide).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public postSlide(slide:Slide):Observable<SlideResponse>{
    return this.baseApi.post("/slides", slide);   
  }
}