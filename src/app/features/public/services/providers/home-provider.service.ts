import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PublicApiService } from "../public-api.service";
import { Slide } from "../../../../core/models/slides.model";

@Injectable({
  providedIn: "root",
})
export class HomeProviderService extends PublicApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  public getSlides(): Observable<Slide[]> {
    return super.get("/slides").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
