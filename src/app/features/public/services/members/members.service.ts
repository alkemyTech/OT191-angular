import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberResponse } from 'src/app/core/models/member.model';
import { BaseApiService } from 'src/app/shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  
  constructor(public baseHttp: BaseApiService) {}

	getMembers(destinationRoute: string, id: null): Observable<IMemberResponse> {
		return this.baseHttp.getApi(destinationRoute, id);
	}
}
