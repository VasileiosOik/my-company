import {inject, TestBed} from '@angular/core/testing';

import {EventService} from './event.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])]

    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
