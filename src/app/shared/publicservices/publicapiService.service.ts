import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PublicapiServiceService {

  constructor(private http: HttpClient) { } 

  params= new HttpParams();
  Api="https://reqres.in/api/users";

  get(destinationRoute: string, id:number|null){
    this.params=this.params.append('type', 'all-meat')
    this.params=this.params.append('sentences', '1')
    this.params=this.params.append('format', 'text')
    const options={
      params:this.params
    }
    return this.http.get(this.Api+'/'+id)
  } 

  
  
}
