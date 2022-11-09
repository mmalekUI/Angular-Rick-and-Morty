import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Params } from "@angular/router";

@Injectable()
export class CharactersDataService {
  constructor(private http: HttpClient) {}

  getCharacters(queryParams?: Params): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character/", {
      params: this.configureHttpParams(queryParams),
    });
  }

  private configureHttpParams(queryParams?: Params): HttpParams {
    let params = new HttpParams();
    if (!queryParams) {
      return params;
    }
    for (const property in queryParams) {
      params = params.set(property, queryParams[property] ?? "");
    }
    return params;
  }
}
