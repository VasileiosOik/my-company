import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from '../adding-department/department.service';
import {Department} from '../model/department';
import {BaseModel} from '../../shared/models/base-model';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-adding-department',
  templateUrl: './listing-department.component.html',
  styleUrls: ['./listing-department.component.scss']
})
export class ListingDepartmentComponent extends BaseModel implements OnInit {

  departments: Department[];
  departmentFilter: any = {depId: ''};
  order = 'depId';
  reverse = false;

  constructor(private router: Router, private departmentService: DepartmentService, private orderPipe: OrderPipe) {
    super();
    this.orderPipe.transform(this.departments, this.order);
  }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe(data => {
          this.departments = data;
          console.log(this.departments);
        },
        error => {
          this.handleError(error, 'Failed fetched Departments');
        },
        () => {
          console.log('Departments fetched successfully');
        }
      );
  }

  deleteDepartment(department: Department): void {
    this.departmentService.deleteDepartment(department)
      .subscribe(data => {
        this.departments = this.departments.filter(dep => dep !== department);
      });
  }

  setOrder(value: string) {
    console.log(value);
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
