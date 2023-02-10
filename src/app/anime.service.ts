import {inject, Injectable} from "@angular/core";
import {UseInfiniteQuery} from "@ngneat/query";
import {GraphService} from "./graph.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private id = 1;
  private useInfiniteQuery = inject(UseInfiniteQuery);
  private ANIME_LIST_QUERY = `query ($page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    media {
      coverImage {
        extraLarge
      }
      title {
        english
      }
      description
    }
  }
}`;

  constructor(private graphService: GraphService) {
  }

  public getAnimes() {
    return this.useInfiniteQuery(['animes'], ({pageParam = 1}) => {
        return this.graphService.query(this.ANIME_LIST_QUERY, {
          page: pageParam, perPage: 6
        })
          .pipe(
            map((response: any) => response.Page.media)
          )
      },
      {
        getNextPageParam: () => ++this.id
      }
    )
  }
}
