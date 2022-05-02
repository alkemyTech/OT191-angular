import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { News } from "src/app/core/models/news.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

import { PublicApiService } from '../public-api.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class NewsProviderService extends PublicApiService {

  constructor(http: HttpClient,public dialog: MatDialog) {
    super(http);
  }
  
  options(): void {
     this.baseUrl = environment.newsApiURL;
  }

  public getAllNews(): Observable<News[]> {
    this.options();
    return super.get("").pipe(
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
    this.options();
    return super.get(`/${id}`).pipe(
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
    this.options();
    return super.post("", news).pipe(
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

  public updateNews(id: string | number, news: News | Partial<News>): Observable<News> {
    this.options();
    return super.put(`/${id}`, news).pipe(
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
    this.options();
    return super.delete(`/${id}`).pipe(
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
