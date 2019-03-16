import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EventReport} from './model/event-report';
import {EventSearchValues} from './model/event-search-values';
import {DatePipe} from '@angular/common';
import {EventService} from './event.service';
import {UrlEnum} from '../shared/enums/url.enum';
import {BaseModel} from '../shared/models/base-model';
import {Department} from '../department/model/department';
import {Employee} from '../employee/model/employee';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent extends BaseModel implements OnInit {

  myForm: FormGroup;
  eventReport: Array<EventReport>;
  eventSearchValues: EventSearchValues = new EventSearchValues();
  departmentReport: Array<Department>;
  employeeReport: Array<Employee>;

  constructor(private pipe: DatePipe, private eventService: EventService) {
    super();
  }

  ngOnInit() {
    this.myForm = new FormGroup({});
    this.defaultFromDate();
    this.defaultToDate();
  }

  loadReport() {
    this.departmentReport = new Array<Department>();
    this.employeeReport = new Array<Employee>();
    this.eventReport = new Array<EventReport>();
    this.eventService.getEvents(this.mapEventReport())
      .subscribe(data => {
          console.log(data);
          this.eventReport = data;
        },
        error => {
          this.handleError(error, 'Failed fetched Events');
        },
        () => {
          this.eventReport.filter(event => {
            if (event && event.employeeId) {
              this.employeeReport.push(this.mapEmployee(event));
            } else {
              this.departmentReport.push(this.mapDepartment(event));
            }
          });
          console.log('Finished fetching events');
        }
      );
  }

  private mapEmployee(event: EventReport) {
    return new Employee(event.employeeId, event.firstName, event.lastName, event.jobTitle, event.hireDate, event.managerId, event.departmentId);
  }

  private defaultToDate() {
    this.eventSearchValues.toDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  }

  private defaultFromDate() {
    this.eventSearchValues.fromDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  }

  private mapEventReport() {
    const params = new URLSearchParams();
    if (this.eventSearchValues.fromDate) {
      params.append('fromDate', this.mapEventDate(this.eventSearchValues.fromDate));
    }

    if (this.eventSearchValues.toDate) {
      params.append('toDate', this.mapEventDate(this.eventSearchValues.toDate));
    }
    return UrlEnum.eventUrl + '?' + params;
  }

  private mapEventDate(date: any) {
    const s = this.pipe.transform(date, 'yyyy-MM-dd');
    return s.toString();
  }

  private mapDepartment(event: EventReport) {
    return new Department(event.departmentId, event.departmentName);
  }
}
