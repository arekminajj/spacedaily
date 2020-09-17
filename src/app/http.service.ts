import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { News } from "./news";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  base_url = "https://spaceflightnewsapi.net/api/v1/articles?limit=10&page=";

  GetNews(page: number) {
    return this.http.get<News>(this.base_url + page.toString());
  }
}
