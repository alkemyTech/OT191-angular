import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PublicApiService } from "../public-api.service";
import { Slide } from "../../../../core/models/slides.model";

@Injectable({
  providedIn: "root",
})
export class HomeProviderService {
  constructor(private publicApiService: PublicApiService) {}

  public getAllSlides(): Observable<Slide[]> {
    return this.publicApiService.get("/slides").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getSlides(): Observable<Slide[]> {
    return this.publicApiService.get("/slides").pipe(
      map((res: any) => {
        return res.data.filter((slide: any) => slide.order !== null);
      })
    );
  }
}
