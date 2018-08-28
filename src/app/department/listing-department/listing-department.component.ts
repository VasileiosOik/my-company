import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from '../adding-department/department.service';
import {Department} from '../model/department';
import {BaseModel} from "../../shared/models/base-model";

@Component({
  selector: 'app-adding-department',
  templateUrl: './listing-department.component.html',
  styleUrls: ['./listing-department.component.css']
})
export class ListingDepartmentComponent extends BaseModel implements OnInit {

  departments: Department[];

  constructor(private router: Router, private departmentService: DepartmentService) {
    super();
  }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe( data => {
        this.departments = data;
        console.log(this.departments);
      },

        error => {
          this.handleError(error, 'Failed fetched Departments')
        },

        () => {
          console.log('Departments fetched successfully');
        }
      );
  }

  deleteDepartment(department: Department): void {
    this.departmentService.deleteDepartment(department)
      .subscribe( data => {
        this.departments = this.departments.filter(dep => dep !== department);
      });
  }

}
