import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventResultsComponent} from './event-results.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';

describe('EventResultsComponent', () => {
  let component: EventResultsComponent;
  let fixture: ComponentFixture<EventResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventResultsComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
