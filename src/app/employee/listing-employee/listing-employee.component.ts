import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from '../adding-employee/employee.service';

@Component({
  selector: 'app-adding-employee',
  templateUrl: './listing-employee.component.html',
  styleUrls: ['./listing-employee.component.css']
})
export class ListingEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
        console.log(this.employees);
      });
  }

  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(e => e !== employee);
      },
      error => console.log('Error: ', error),

      () => console.log("Deleted successfully"));
  }

}
