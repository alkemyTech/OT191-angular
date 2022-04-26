import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from 'src/app/core/models/news.model';

import { PublicApiService } from '../public-api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(private publicApiService: PublicApiService) { }


  public getAllNews(): Observable<News[]> {
    return this.publicApiService.get("/news").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getNewsById(id: string | number): Observable<News> {
    return this.publicApiService.get(`/news/${id}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

 public createNews(news: News): Observable<News> {
    return this.publicApiService.post("/news", news).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public updateNews(id: string | number, news: News | Partial<News>): Observable<News> {
    return this.publicApiService.put(`/news/${id}`, news).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public deleteNews(id: string | number): Observable<News> {
    return this.publicApiService.delete(`/news/${id}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
