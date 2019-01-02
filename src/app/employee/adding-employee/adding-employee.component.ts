import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from './employee.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee',
  templateUrl: './adding-employee.component.html',
  styleUrls: ['./adding-employee.component.scss']
})
export class AddingEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  addingForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private employeeService: EmployeeService,
              private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      console.log('The chosen id is', id);
      this.getEmployee(id);
    });


    this.addingForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      hireDate: new FormControl('', Validators.required),
      managerId: new FormControl('', [Validators.required, Validators.minLength(6)]),
      departmentId: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  saveEmployee(): void {
    this.employee = Object.assign({}, this.addingForm.value);
    console.log('The employee to save is: ', this.employee);
    this.submitted = true;

    if (this.addingForm.invalid) {
      return;
    }

    this.employee.hireDate = this.convertDateToString(this.addingForm.controls['hireDate'].value);
    this.employeeService.saveEmployee(this.employee)
      .subscribe(data => console.log(data),
        error => console.log('Error', error),
        () => {
          console.log('Created successfully');
          this.addingForm.reset();
          this.addingForm.markAsPristine();
        }
      );
  }

  private convertDateToString(date: any): string {
    let dateObj: Date;
    dateObj = new Date(date.year, date.month - 1, date.day);
    return dateObj.toISOString().substring(0, dateObj.toISOString().indexOf('T'));
  }

  private getEmployee(id: number) {
    if (id === 0) {
      console.log('Create new one');
    } else {
      this.employeeService.getEmployee(id)
        .subscribe(data => {
            this.employee = data;
            console.log(this.employee);
            this.addingForm.controls['name'].setValue(this.employee.name);
            this.addingForm.controls['lName'].setValue(this.employee.lName);
            this.addingForm.controls['jobTitle'].setValue(this.employee.jobTitle);
            this.addingForm.controls['managerId'].setValue(this.employee.managerId);
            this.addingForm.controls['departmentId'].setValue(this.employee.departmentId);
            this.addingForm.controls['hireDate'].setValue(this.employee.hireDate);
            this.addingForm.controls['hireDate'].patchValue(this.convertStringToDateObject(this.employee.hireDate));
          },
          error =>
            console.log('Error', error),
          () => {
            console.log('Retrieved successfully');
          });

    }
  }

  private convertStringToDateObject(hireDate: string): NgbDateStruct {
    const d = new Date(hireDate);
    return {
      'year': d.getFullYear(),
      'month': d.getMonth() + 1,
      'day': d.getDate()
    };

  }

  resetForm() {
    this.addingForm.reset();
    this.submitted = false;
  }
}
