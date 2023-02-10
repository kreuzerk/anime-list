import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule} from "./app.module";

describe('AppComponent', () => {

  const demoData = {
    pages: [
      [
        {
          name: 'animeOne'
        },
        {
          name: 'animeTwo'
        },
      ],
      [
        {
          name: 'animeThree'
        },
        {
          name: 'animeFour'
        },
      ]
    ]
  }

  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const mappedData = component.mapper(demoData);
    expect(mappedData[0][0].test).toEqual('bar');
  });


});
