import {ENVIRONMENT_INITIALIZER, inject, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {QueryClientService} from "@ngneat/query";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header.component";
import {SpinnerComponent} from "./spinner.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    HttpClientModule,
    SpinnerComponent,
    InfiniteScrollModule
  ],
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        const queryClient = inject(QueryClientService);
        import('@ngneat/query-devtools').then((m) => {
          m.ngQueryDevtools({queryClient});
        });
      },
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
