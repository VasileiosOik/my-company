import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventComponent} from './event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatTableModule, MatTabsModule
} from '@angular/material';
import {EventResultsDepartmentComponent} from './event-results-department/event-results-department.component';
import {ErrorMessageComponent} from '../shared/error-message/error-message/error-message.component';
import {DatePipe} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventResultsEmployeeComponent} from './event-results-employee/event-results-employee.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent, EventResultsDepartmentComponent, EventResultsEmployeeComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, MatDatepickerModule, MatTabsModule, MatTableModule,
        MatNativeDateModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, RouterModule.forRoot([])],
      providers: [DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
