import { Injectable } from '@angular/core';
import { Organization } from 'src/app/core/models/organization.model';
import { PrivateApiService } from '../../private-api.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationProviderService {

  constructor( private privateApiService:PrivateApiService,
    private alerts: AlertService) { }

  public getOrganization(): Observable<Organization> {
    return this.privateApiService.get("/organization").pipe(
      map((data: any) => {
        return data.data;
      }),
      
    );
  }

  public getById(id: string): Observable<Organization> {
    return this.privateApiService.get("/organization", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public deleteOrganization(id: string) {
    return this.privateApiService.delete("/organization", id).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public createOrganization(){
    return this.privateApiService.put("/organization").pipe(
      map((data:any)=>{
        return data.data
      })
    )
  }

  public updateOrganization(id: string, user: Organization | Partial<Organization>) {
    return this.privateApiService.put("/organization", id, user).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
