import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../department/model/department';
import {BaseModel} from '../../shared/models/base-model';
import {Employee} from '../../employee/model/employee';

@Component({
  selector: 'app-event-results-employee',
  templateUrl: './event-results-employee.component.html',
  styleUrls: ['./event-results-employee.component.css']
})
export class EventResultsEmployeeComponent extends BaseModel implements OnInit {

  @Input() employeeReport: Array<Employee>;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
