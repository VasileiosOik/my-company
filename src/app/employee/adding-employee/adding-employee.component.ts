import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from './employee.service';
import {Datepicker} from "../model/datepicker";

@Component({
  selector: 'app-employee',
  templateUrl: './adding-employee.component.html',
  styleUrls: ['./adding-employee.component.css']
})
export class AddingEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  datePicker: Datepicker = new Datepicker();

  constructor(private router: Router, private employeeService: EmployeeService) {
  }


  ngOnInit() {
    this.defaultDate();
  }

  createEmployee(): void {
    this.employee.hireDate = this.convertDateToStringValue(this.datePicker.date);
    console.log("Einai o ergazomenos: ", this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe((data: any) => console.log(data),
        error => console.log('Error', error),
        () => console.log("Created successfully")
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
}
