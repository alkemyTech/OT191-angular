import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class BaseApiService {
	constructor(private http: HttpClient) {}
	private baseUrl: string = environment.apiURL;
	protected httpOptions: HttpHeaders | any;

	options() {
		this.httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
	}

	public getApi(destinationRoute: string, id: number | null): Observable<any> {
		return this.http.get(
			this.baseUrl + destinationRoute + (id != null ? "/" + id : "")
		);
	}
  
	public get<T>(path: string): Observable<T> {
		this.options();
		return this.http.get(this.baseUrl + path, this.httpOptions).pipe(
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

  public put<T>(path: string, body: any): Observable<T> {
    this.options();
    return this.http.put(this.baseUrl + path, body, this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public patch<T>(path: string, body: any): Observable<T> {
    this.options();
    return this.http.patch(this.baseUrl + path, body, this.httpOptions).pipe(
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
