import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from '../adding-employee/employee.service';
import {BaseModel} from '../../shared/models/base-model';

@Component({
  selector: 'app-adding-employee',
  templateUrl: './listing-employee.component.html',
  styleUrls: ['./listing-employee.component.css']
})
export class ListingEmployeeComponent extends BaseModel implements OnInit {


  employees: Employee[];
  filteredEmployees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) {
    super();
  }

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
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
          this.employees = this.employees.filter(e => e !== employee);
          this.filteredEmployees = this.filteredEmployees.filter(e => e !== employee);
        },
        error => console.log('Error: ', error),

        () => console.log('Deleted successfully'));
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  private filterEmployees(value: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
