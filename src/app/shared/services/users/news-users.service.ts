import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model'
import { PrivateApiService } from 'src/app/features/backoffice/services/private-api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {

  constructor( public privateApiService:PrivateApiService) { }

  public getAllUsers(): Observable<User[]> {
    return this.privateApiService.get("/users").pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getUsersById(id: string): Observable<User> {
    return this.privateApiService.get("/users/" + id);
  }

  public deleteUserById(id: number): Observable<User>{
    return this.privateApiService.delete("/users/" + id)
  }

  public createUsers(body:any): Observable<User>{
    return this.privateApiService.post("/users",body)
  }

  public editUser(body:any): Observable<User>{
    return this.privateApiService.put("users",body)
  }

  public deleteUsers(id:number): Observable<User>{
    return this.privateApiService.delete("/users/"+id)
  }


}
