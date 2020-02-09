import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainboxComponent } from './mainbox.component';
import { NewsPreviewComponent } from '../news-preview/news-preview.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';

describe('MainboxComponent', () => {
  let component: MainboxComponent;
  let fixture: ComponentFixture<MainboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MainboxComponent,
        NewsPreviewComponent,
        GrayButtonComponent,
        DatePipeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
