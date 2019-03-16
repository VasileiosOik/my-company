import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventResultsEmployeeComponent} from './event-results-employee.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';

describe('EventResultsEmployeeComponent', () => {
  let component: EventResultsEmployeeComponent;
  let fixture: ComponentFixture<EventResultsEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventResultsEmployeeComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
