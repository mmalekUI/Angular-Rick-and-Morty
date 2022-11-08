import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class CharactersDataService {
  constructor(private http: HttpClient) {}
  getCaracters(pageIndex?: number, characterStatus?: string): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character", {
      params: new HttpParams()
        .set("page", pageIndex ? pageIndex : "")
        .set("status", characterStatus ? characterStatus : ""),
    });
  }
}
