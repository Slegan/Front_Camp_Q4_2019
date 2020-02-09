import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateEditFormComponent } from './create-edit-form.component';
import { HeaderComponent } from '../header/header.component';
import { GrayButtonComponent } from '../gray-button/gray-button.component';

describe('CreateEditFormComponent', () => {
  let component: CreateEditFormComponent;
  let fixture: ComponentFixture<CreateEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        CreateEditFormComponent,
        GrayButtonComponent,
        HeaderComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  xit('form should be invalid', async() => {
    component.newsForm.controls['title'].setValue('');
    component.newsForm.controls['description'].setValue('');
    expect(component.newsForm.valid).toBeFalsy();
  });
});
