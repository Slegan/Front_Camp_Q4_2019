import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEditPageComponent } from './create-edit-page.component';
import { HeaderComponent } from '../header/header.component';
import { CreateEditFormComponent } from '../create-edit-form/create-edit-form.component';
import { FooterComponent } from '../footer/footer.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';

describe('CreateEditPageComponent', () => {
  let component: CreateEditPageComponent;
  let fixture: ComponentFixture<CreateEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        CreateEditPageComponent,
        HeaderComponent,
        CreateEditFormComponent,
        GrayButtonComponent,
        FooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
