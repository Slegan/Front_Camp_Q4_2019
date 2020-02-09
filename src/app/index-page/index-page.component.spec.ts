import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { IndexPageComponent } from './index-page.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';
import { HeaderComponent } from '../header/header.component';
import { MainboxComponent } from '../mainbox/mainbox.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsPreviewComponent } from '../news-preview/news-preview.component';

describe('IndexPageComponent', () => {
  let component: IndexPageComponent;
  let fixture: ComponentFixture<IndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IndexPageComponent,
        GrayButtonComponent,
        HeaderComponent,
        MainboxComponent,
        FooterComponent,
        NewsPreviewComponent,
        DatePipeComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
