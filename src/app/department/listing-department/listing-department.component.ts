import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from '../adding-department/department.service';
import {Department} from '../model/department';

@Component({
  selector: 'app-adding-department',
  templateUrl: './listing-department.component.html',
  styleUrls: ['./listing-department.component.css']
})
export class ListingDepartmentComponent implements OnInit {

  departments: Department[];

  constructor(private router: Router, private departmentService: DepartmentService) {

  }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe( data => {
        this.departments = data;
        console.log(this.departments);
      });
  }

  deleteDepartment(department: Department): void {

    this.departmentService.deleteDepartment(department)
      .subscribe( data => {
        this.departments = this.departments.filter(e => e !== department);
      });
  }

}
