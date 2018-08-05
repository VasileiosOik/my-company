import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Department} from '../model/department';
import {DepartmentService} from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './adding-department.component.html',
  styleUrls: ['./adding-department.component.css']
})
export class AddingDepartmentComponent implements OnInit {

  department: Department = new Department();

  constructor(private router: Router, private departmentService: DepartmentService) {

  }


  ngOnInit() {
  }

  createDepartment(): void {
    console.log(this.department);
    this.departmentService.createDepartment(this.department)
      .subscribe( data => {
        alert('Department created successfully.');
      });

  }

}
