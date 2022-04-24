import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class BaseApiService {
	constructor(private http: HttpClient) {}
	private baseUrl: string ='';

	public get(destinationRoute: string, id: number | null): Observable<any> {
		return this.http.get(this.baseUrl+destinationRoute + (id!=null?"/"+id:''));
	}
}
