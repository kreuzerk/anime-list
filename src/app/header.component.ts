import {Component} from "@angular/core";
import {SpinnerComponent} from "./spinner.component";

@Component({
  selector: 'header',
  template: `
    <div>
      <h1>Anime list</h1>
      <spinner />
    </div>
  `,
  styles: [`

    h1 {
      padding-left: 50px;
      font-size: 30px;
      color: white;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 70px;
      background-color: #021818;
      position: fixed;
      top: 0;
      width: 100%;
    }

    spinner {
      padding-right: 50px;
    }
  `],
  imports: [
    SpinnerComponent
  ],
  standalone: true
})
export class HeaderComponent {
}
