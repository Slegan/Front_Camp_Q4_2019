import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsDetailsPageComponent } from './news-details-page.component';
import { HeaderComponent } from '../header/header.component';
import { NewsDetailsComponent } from '../news-details/news-details.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { FooterComponent } from '../footer/footer.component';

describe('NewsDetailsPageComponent', () => {
  let component: NewsDetailsPageComponent;
  let fixture: ComponentFixture<NewsDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        NewsDetailsPageComponent,
        HeaderComponent,
        NewsDetailsComponent,
        GrayButtonComponent,
        DatePipeComponent,
        FooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
