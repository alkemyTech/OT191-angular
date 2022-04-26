import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../../models/response.interface';
import { SlideI } from '../../models/slide.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = "https://ongapi.alkemy.org/api/"
  constructor(private http:HttpClient) { }

  createSlide(form:SlideI):Observable<ResponseI>{
    let direccion= this.url + "slides/create"
    return this.http.post<ResponseI>(direccion,form)
  }

  editSlide(form:SlideI):Observable<ResponseI>{
    let direccion = this.url + "slides"
    return this.http.put<ResponseI>(direccion, form);
  }
}
