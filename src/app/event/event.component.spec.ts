import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventComponent} from './event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {EventResultsComponent} from './event-results/event-results.component';
import {ErrorMessageComponent} from '../shared/error-message/error-message/error-message.component';
import {DatePipe} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent, EventResultsComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, MatDatepickerModule,
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
