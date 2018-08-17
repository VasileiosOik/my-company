import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from './employee.service';
import {Datepicker} from '../model/datepicker';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './adding-employee.component.html',
  styleUrls: ['./adding-employee.component.css']
})
export class AddingEmployeeComponent implements OnInit {

  @ViewChild('f') public createEmployeeForm: NgForm;
  employee: Employee = new Employee();
  datePicker: Datepicker = new Datepicker();

  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      console.log('The chosen id is', id);
      this.getEmployee(id);
    });
    this.defaultDate();
  }

  saveEmployee(): void {
    console.log('The employee to save is: ', this.employee);
    this.employee.hireDate = this.convertDateToStringValue(this.datePicker.date);
    this.employeeService.saveEmployee(this.employee)
      .subscribe(data => console.log(data),
        error => console.log('Error', error),
        () => {
          console.log('Created successfully');
          this.createEmployeeForm.resetForm();
        }
      );
  }

  private defaultDate() {
    const date = new Date(Date.now());

    this.datePicker.date = {
      'year': date.getFullYear(),
      'month': date.getMonth() + 1,
      'day': date.getDate()
    };

  }

  private convertDateToStringValue(date: any): string {
    let dateObj: Date;
    dateObj = new Date(date.year, date.month - 1, date.day);
    return dateObj.toISOString().substring(0, dateObj.toISOString().indexOf('T'));
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee.id = null;
      this.employee.name = null;
      this.employee.lName = null;
      this.employee.jobTitle = null;
      this.employee.hireDate = null;
      this.employee.managerId = null;
      this.employee.departmentId = null;
    } else {
      this.employeeService.getEmployee(id)
        .subscribe(data => {
          this.employee = data;
          const hire = this.employee.hireDate;
          this.displayEmployeeHireDate(hire);
        });

    }
  }

  private displayEmployeeHireDate(hireDate: string) {
    let date: Date;
    date = new Date(hireDate);
    this.datePicker.date = {
      'year': date.getFullYear(),
      'month': date.getMonth() + 1,
      'day': date.getDate()
    };
  }
}
