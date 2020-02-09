import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsDetailsComponent } from './news-details.component';
import { HeaderComponent } from '../header/header.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news'

describe('NewsDetailsComponent', () => {
  let component: NewsDetailsComponent;
  let fixture: ComponentFixture<NewsDetailsComponent>;
  let service: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        NewsDetailsComponent,
        HeaderComponent,
        GrayButtonComponent,
        DatePipeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsComponent);
    component = fixture.componentInstance;
  });

  it('service should return right post', () => {
    service = new NewsService();
    const post = service.getPost("Bitcoin is the Most Popular Crypto Asset Amongst Investors");
    component.post = post;
    expect(component.post.description).toContain('Bitcoin and crypto market');
  });

  it('oninit not uderstand', () => {
    component.ngOnInit();
    expect(component.post).toBeUndefined();
    service = new NewsService();
    const post = service.getPost("Bitcoin is the Most Popular Crypto Asset Amongst Investors");
    component.post = post;
  
    // expect(component).toBeUndefined();
  });
});
