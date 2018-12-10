import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from '../adding-employee/employee.service';
import {BaseModel} from '../../shared/models/base-model';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-adding-employee',
  templateUrl: './listing-employee.component.html',
  styleUrls: ['./listing-employee.component.scss']
})
export class ListingEmployeeComponent extends BaseModel implements OnInit {


  employees: Employee[];
  filteredEmployees: Employee[];
  employeeFilter: any = {id: ''};
  order = 'id';
  reverse = false;

  constructor(private router: Router, private employeeService: EmployeeService, private orderPipe: OrderPipe) {
    super();
    this.orderPipe.transform(this.filteredEmployees, this.order);
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => {
          this.employees = data;
          this.filteredEmployees = data;
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
          console.log(data);
          this.employees = this.employees.filter(e => e !== employee);
          this.filteredEmployees = this.filteredEmployees.filter(e => e !== employee);
        },
        error => console.log('Error: ', error),

        () => console.log('Deleted successfully'));
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  setOrder(value: string) {
    console.log(value);
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
