import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { News } from "src/app/core/models/news.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

import { PublicApiService } from "../public-api.service";

@Injectable({
  providedIn: "root",
})
export class NewsProviderService {
  constructor(
    private publicApiService: PublicApiService,
    public dialog: MatDialog
  ) {}

  public getAllNews(): Observable<News[]> {
    return this.publicApiService.get("/news").pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener las novedades",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public getNewsById(id: string | number): Observable<News> {
    return this.publicApiService.get(`/news/${id}`).pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al obtener la noticia",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public createNews(news: News): Observable<News> {
    return this.publicApiService.post("/news", news).pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al crear la noticia",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public updateNews(
    id: string | number,
    news: News | Partial<News>
  ): Observable<News> {
    return this.publicApiService.put(`/news/${id}`, news).pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al actualizar la noticia",
            value: "error",
          },
        });
        return [];
      })
    );
  }

  public deleteNews(id: string | number): Observable<News> {
    return this.publicApiService.delete(`/news/${id}`).pipe(
      map((res: any) => {
        return res.data;
      }),
      catchError((err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: "Error",
            description: "Ocurrió un error al borrar la noticia",
            value: "error",
          },
        });
        return [];
      })
    );
  }
}
