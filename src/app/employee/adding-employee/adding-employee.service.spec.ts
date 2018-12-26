import {inject, TestBed} from '@angular/core/testing';

import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])]

    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
