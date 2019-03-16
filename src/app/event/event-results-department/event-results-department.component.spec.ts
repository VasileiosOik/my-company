import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventResultsDepartmentComponent} from './event-results-department.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';

describe('EventResultsDepartmentComponent', () => {
  let component: EventResultsDepartmentComponent;
  let fixture: ComponentFixture<EventResultsDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventResultsDepartmentComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
