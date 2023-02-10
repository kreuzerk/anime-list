import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

const BACKEND_URL = 'https://graphql.anilist.co';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) {
  }

  public query<T>(query: string, variables: { [key: string]: any } = {}): Observable<T> {
    return this.http.post<{ data: T }>(BACKEND_URL, {
      query, variables
    }).pipe(
      map(response => response.data)
    )
  }
}
