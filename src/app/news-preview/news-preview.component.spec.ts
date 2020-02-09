import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NewsPreviewComponent } from './news-preview.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news'

describe('NewsPreviewComponent static', () => {
  let component: NewsPreviewComponent;
  let fixture: ComponentFixture<NewsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        NewsPreviewComponent,
        DatePipeComponent,
        GrayButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    const post: News = {
      "source": {
        "id": null,
        "name": "Forbes.com"
      },
      "custom": true,
      "author": "Billy Bambrough, Contributor, Billy Bambrough, Contributor https://www.forbes.com/sites/billybambrough/",
      "title": "There’s Something Very Strange Going On With Bitcoin Exchange LocalBitcoins",
      "description": "Bitcoin exchange LocalBitcoins, often used as a gauge of bitcoin interest and prices around the world, has suddenly begun suspending long-time users' accounts without warning...",
      "url": "https://www.forbes.com/sites/billybambrough/2020/01/25/theres-something-strange-going-on-with-bitcoin-exchange-localbitcoins/",
      "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1193917890%2F960x0.jpg",
      "publishedAt": "2020-01-25T15:01:41Z",
      "content": "Bitcoin exchange LocalBitcoins, often used as a gauge of bitcoin interest and prices around the world, has suddenly begun suspending long-time users' accounts without warning.Reports began coming in this week that LocalBitcoins users across Africa, the Middle… [+6525 chars]"
    };
    component.post = post;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should have right description', () => {
    const desc = fixture.nativeElement.querySelector('.news-description');
    expect(desc.textContent).toContain('Bitcoin exchange LocalBitcoins');
  });
});

describe('NewsPreviewComponent with service', () => {
  let component: NewsPreviewComponent;
  let fixture: ComponentFixture<NewsPreviewComponent>;
  let service: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        NewsPreviewComponent,
        DatePipeComponent,
        GrayButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    service = new NewsService();
    const post = service.getPost("There’s Something Very Strange Going On With Bitcoin Exchange LocalBitcoins");
    component.post = post;
    fixture.detectChanges();
  });

  it('should delete', () => {
    component.deletePost();
    fixture.detectChanges();
    let result = service.getPost(component.post.title);
    expect(result).toBeUndefined();
  });
});


describe('NewsPreviewComponent router links', () => {
  let component: NewsPreviewComponent;
  let fixture: ComponentFixture<NewsPreviewComponent>;
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NewsPreviewComponent,
        DatePipeComponent,
        GrayButtonComponent,
        RouterLinkDirectiveStub
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    const post: News = {
      "source": {
        "id": null,
        "name": "Forbes.com"
      },
      "custom": true,
      "author": "Billy Bambrough, Contributor, Billy Bambrough, Contributor https://www.forbes.com/sites/billybambrough/",
      "title": "There’s Something Very Strange Going On With Bitcoin Exchange LocalBitcoins",
      "description": "Bitcoin exchange LocalBitcoins, often used as a gauge of bitcoin interest and prices around the world, has suddenly begun suspending long-time users' accounts without warning...",
      "url": "https://www.forbes.com/sites/billybambrough/2020/01/25/theres-something-strange-going-on-with-bitcoin-exchange-localbitcoins/",
      "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1193917890%2F960x0.jpg",
      "publishedAt": "2020-01-25T15:01:41Z",
      "content": "Bitcoin exchange LocalBitcoins, often used as a gauge of bitcoin interest and prices around the world, has suddenly begun suspending long-time users' accounts without warning.Reports began coming in this week that LocalBitcoins users across Africa, the Middle… [+6525 chars]"
    };
    component.post = post;
    fixture.detectChanges(); // trigger initial data binding

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('can instantiate the component', () => {
    expect(component).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(2, 'should have 2 routerLinks');
    expect(routerLinks[0].linkParams).toEqual(['/news', component.post.title]);
    expect(routerLinks[1].linkParams).toEqual(['/Edit', component.post.title]);
  });

  it('can click link in template', () => {
    const editLinkDe = linkDes[1];   // heroes link DebugElement
    const editLink = routerLinks[1]; // heroes link directive

    expect(editLink.navigatedTo).toBeNull('should not have navigated yet');

    editLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(editLink.navigatedTo).toEqual(['/Edit', component.post.title]);
  });
});
