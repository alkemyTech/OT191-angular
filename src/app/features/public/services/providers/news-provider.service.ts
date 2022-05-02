import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from 'src/app/core/models/news.model';

import { PublicApiService } from '../public-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsProviderService extends PublicApiService {

  constructor(http: HttpClient) {
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
      })
    );
  }

  public getNewsById(id: string | number): Observable<News> {
    this.options();
    return super.get(`/${id}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

 public createNews(news: News): Observable<News> {
    this.options();
    return super.post("", news).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public updateNews(id: string | number, news: News | Partial<News>): Observable<News> {
    this.options();
    return super.put(`/${id}`, news).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public deleteNews(id: string | number): Observable<News> {
    this.options();
    return super.delete(`/${id}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
