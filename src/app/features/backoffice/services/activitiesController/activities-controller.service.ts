import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { BaseApiService } from 'src/app/shared/services/base-api.service';

import { IActivity } from '../../backoffice.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesControllerService {
    constructor(public baseHttp: BaseApiService){}

    getActivities(destinationRoute: string, id:null):Observable<IActivity[]>{
        return this.baseHttp.get(destinationRoute, id) ;
    }
    getActivity(destinationRoute: string, id:number):Observable<IActivity>{
      return this.baseHttp.get(destinationRoute, id)
  }
    createActivity(activity:IActivity, destinationRoute: string, id:number|null){
    }
}