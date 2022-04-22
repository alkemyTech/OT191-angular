import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public get<T>(path: string): Observable<T> {
    return super.get<T>(path);
  }

  public post<T>(path: string, body: any): Observable<T> {
    return super.post<T>(path, body);
  }

}


