import { Injectable } from '@angular/core';
import { PublicapiServiceService } from 'src/app/shared/publicservices/publicapiService.service';
import { IActivity } from '../backoffice.interface';

@Injectable({
  providedIn: 'root'
})
export class activitiesController {
    constructor(public baseHttp: PublicapiServiceService){}

    getActivities(destinationRoute: string, id:number|null){
        return this.baseHttp.get(destinationRoute, id)
    }
    createActivity(activity:IActivity, destinationRoute: string, id:number|null){
    }
}