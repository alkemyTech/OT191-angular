import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

import { PublicApiService } from "../public-api.service";
import { News } from "../../../../core/models/news.model";
import { Organization } from "../../../../core/models/organization.model";
import { Slide } from "../../../../core/models/slides.model";
import { Testimonial } from "../../../../core/models/testimonial.model";

@Injectable({
  providedIn: "root",
})
export class HomeProviderService extends PublicApiService {
  constructor(http: HttpClient,public dialog: MatDialog) {
    super(http);
  }

  public getAllSlides(): Observable<Slide[]> {
    return super.get("/slides").pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener los slides",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public getSlides(): Observable<Slide[]> {
    return super.get("/slides").pipe(
      map((res: any) => {
        return res.data.filter((slide: any) => slide.order !== null);
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener los slides",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public getAllTestimonials(): Observable<Testimonial[]> {
    return super.get("/testimonials").pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener los testimonios",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public getAllNews(): Observable<News[]> {
    return super.get("/news").pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener las noticias",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public getOrganization(): Observable<Organization[]> {
    return super.get("/organization").pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener la informacion de la organizacion",
            value: "error",
          },
        });
        return [];
      })
    );
  }
}
