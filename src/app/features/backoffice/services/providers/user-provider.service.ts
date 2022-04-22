import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrivateApiService } from '../private-api.service';
import { User } from '../../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService extends PrivateApiService {
  
  constructor(http: HttpClient) {
    super(http);
  }
  
  public getUsers(): Observable<User[]> {
    return super.get("/users").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  
}
