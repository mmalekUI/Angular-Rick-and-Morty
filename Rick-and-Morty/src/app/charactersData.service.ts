import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class CharactersDataService {
  constructor(private http: HttpClient) {}

  getAllCaracters(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }
}
