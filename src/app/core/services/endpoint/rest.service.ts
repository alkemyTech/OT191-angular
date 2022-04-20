import { Injectable } from '@angular/core';
import { ResponseI } from '../../models/response.interface';
import { UserI } from '../../models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = "https://ongapi.alkemy.org/api/"
  constructor(private http:HttpClient) { }

  createUser(form:UserI):Observable<ResponseI>{
    let direccion= this.url + "users/create"
    return this.http.post<ResponseI>(direccion,form)
  }

  editUser(form:UserI):Observable<ResponseI>{
    let direccion = this.url + "users"
    return this.http.put<ResponseI>(direccion, form);
  }
}
