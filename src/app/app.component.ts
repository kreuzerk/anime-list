import {Component} from '@angular/core';
import {AnimeService} from "./anime.service";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private AVAILABLE_VARIATIONS = ['one', 'two', 'three', 'four'];

  animeData$ = this.animeService.getAnimes().result$
    .pipe(
      map((result) => {
          if (result.data) {
            result.data.pages = result.data.pages.map((page: any) => {
              return page.map((p: any) => ({
                ...p,
                variation: this.getVariation()
              }));
            });
          }

          return result;
        }
      )
    );

  constructor(private animeService: AnimeService) {
  }

  private getVariation(): string {
    return this.AVAILABLE_VARIATIONS[Math.floor(Math.random() * this.AVAILABLE_VARIATIONS.length)];
  }
}
