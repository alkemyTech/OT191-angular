import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class PublicapiServiceService {
	constructor(private http: HttpClient) {}

	getDataApi(destinationRoute: string, id: number | null) {
		return this.http.get(destinationRoute + "/" + id);
	}
}
