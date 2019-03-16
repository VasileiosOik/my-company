import {Component, Input, OnInit} from '@angular/core';
import {EventReport} from '../model/event-report';
import {BaseModel} from '../../shared/models/base-model';
import {Department} from '../../department/model/department';

@Component({
  selector: 'app-event-results-department',
  templateUrl: './event-results-department.component.html',
  styleUrls: ['./event-results-department.component.scss']
})
export class EventResultsDepartmentComponent extends BaseModel implements OnInit {

  @Input() departmentReport: Array<Department>;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
