import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PublicApiService } from "../public-api.service";
import { Slide } from "../../../../core/models/slides.model";
import { Testimonial } from "../../../../core/models/testimonial.model";
import { News } from "../../../../core/models/news.model";
import { Organization } from "../../../../core/models/organization.model";

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

  public getAllTestimonials(): Observable<Testimonial[]> {
    return this.publicApiService.get("/testimonials").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getAllNews(): Observable<News[]> {
    return this.publicApiService.get("/news").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getOrganization(): Observable<Organization[]> {
    return this.publicApiService.get("/organization").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
