import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PublicapiServiceService } from 'src/app/shared/publicservices/publicapiService.service';

@Injectable({
  providedIn: 'root'
})
export class activitiesController {
    constructor(public baseHttp: PublicapiServiceService){}

    getActivities(destinationRoute: string, id:number|null){
        return this.baseHttp.get(destinationRoute, id)
    }
}