import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Department} from '../model/department';
import {DepartmentService} from './department.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './adding-department.component.html',
  styleUrls: ['./adding-department.component.css']
})
export class AddingDepartmentComponent implements OnInit {
  @ViewChild('f') public createDepartmentForm: NgForm;

  department: Department = new Department();

  constructor(private router: Router, private departmentService: DepartmentService) {

  }


  ngOnInit() {
  }

  createDepartment(): void {
    console.log(this.department);
    this.departmentService.createDepartment(this.department)
      .subscribe(data =>
          console.log(data),

        error => console.log(error, 'Failed to fetch departments'),

        () => {
          console.log('Created successfully');
          this.createDepartmentForm.resetForm();
        }
      );
  }

}
