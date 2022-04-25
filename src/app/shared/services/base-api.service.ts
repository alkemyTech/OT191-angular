import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class BaseApiService {
	private baseUrl: string = environment.apiURL;
	protected httpOptions: HttpHeaders | any;

	constructor(private http: HttpClient) {}

	options() {
		this.httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
	}

	public get<T>(path: string, id: number | null): Observable<T> {
		this.options();
		return this.http
			.get(this.baseUrl + path + (id != null ? "/" + id : ""), this.httpOptions)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	public post<T>(path: string, body: any): Observable<T> {
		this.options();
		return this.http.post(this.baseUrl + path, body, this.httpOptions).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	public delete<T>(path: string): Observable<T> {
		this.options();
		return this.http.delete(this.baseUrl + path, this.httpOptions).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
}
