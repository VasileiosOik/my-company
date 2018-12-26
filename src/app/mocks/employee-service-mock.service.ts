import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {Employee} from '../employee/model/employee';

@Injectable(
)
export class EmployeeServiceMock {

  employees: Array<Employee>;

  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'Bill',
        lName: 'Eco',
        jobTitle: 'Developer',
        hireDate: '2018-05-19',
        managerId: 100001,
        departmentId: 1002
      }
    ];
  }


  getEmployees(): Observable<any[]> {
    return Observable.of(this.employees);
  }
}
