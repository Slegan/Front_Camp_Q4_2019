import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let spans

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 span', () => {
    spans = fixture.nativeElement.querySelectorAll('span');
    fixture.detectChanges();
    expect(spans.length).toEqual(2);
  });

  it('footer should contain NewsAPI', () => {
    spans = fixture.nativeElement.querySelectorAll('span');
    fixture.detectChanges();
    expect(spans[1].textContent).toContain('Powered by NewsAPI');
  });
});
