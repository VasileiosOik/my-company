import {Component, OnInit} from '@angular/core';
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
  errorMessage: string;
  errorModel: any;
  systemErrorText: 'Services are down';
  displayErrorMessage: boolean;

  constructor(private router: Router, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => {
          this.employees = data;
          console.log(this.employees);
        },
        error => {

          this.handleError(error, 'Failed fetched Employees');
        },

        () => {
          console.log('Employees fetched successfully');
        }
      );
  }

  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe(data => {
          this.employees = this.employees.filter(e => e !== employee);
        },
        error => console.log('Error: ', error),

        () => console.log('Deleted successfully'));
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  private handleError(error: any, logMessage: string) {
    console.log(error);
    if (error && error.errorMessage) {
      this.errorMessage = error.errorMessage;
      this.errorModel = error;
    } else {
      this.errorMessage = this.systemErrorText;
    }
    this.displayErrorMessage = true;
    console.log(logMessage);
  }
}
