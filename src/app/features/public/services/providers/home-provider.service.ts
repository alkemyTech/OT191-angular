import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PublicApiService } from "../public-api.service";
import { News } from "../../../../core/models/news.model";
import { Organization } from "../../../../core/models/organization.model";
import { Slide } from "../../../../core/models/slides.model";
import { Testimonial } from "../../../../core/models/testimonial.model";

@Injectable({
  providedIn: "root",
})
export class HomeProviderService extends PublicApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  public getAllSlides(): Observable<Slide[]> {
    return super.get("/slides").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getSlides(): Observable<Slide[]> {
    return super.get("/slides").pipe(
      map((res: any) => {
        return res.data.filter((slide: any) => slide.order !== null);
      })
    );
  }

  public getAllTestimonials(): Observable<Testimonial[]> {
    return super.get("/testimonials").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getAllNews(): Observable<News[]> {
    return super.get("/news").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getOrganization(): Observable<Organization[]> {
    return super.get("/organization").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
