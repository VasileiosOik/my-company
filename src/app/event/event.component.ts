import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {EventReport} from "./model/event-report";
import {EventSearchValues} from "./model/event-search-values";
import {DatePipe} from "@angular/common";
import {EventService} from "./event.service";
import {UrlEnum} from "../shared/enums/url.enum";


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  myForm: FormGroup;
  eventReport: Array<EventReport>;
  eventSearchValues: EventSearchValues = new EventSearchValues();

  constructor(private pipe: DatePipe, private eventService: EventService) { }

  ngOnInit() {
    this.myForm = new FormGroup({});
    this.defaultFromDate();
    this.defaultToDate();
  }

  private defaultToDate() {
    this.eventSearchValues.toDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  }

  private defaultFromDate() {
    this.eventSearchValues.fromDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  }

  loadReport() {
    this.eventService.getEvents(this.mapEventReport())
      .subscribe(data => {
        console.log(data);
        this.eventReport = data;
      },
      error => console.log('Error', error),
      () => {
          console.log('Finished fetching events');
        }
      );
  }

  private mapEventReport() {
    const params = new URLSearchParams();
    if (this.eventSearchValues.fromDate){
      params.append( 'fromDate', this.mapEventDate(this.eventSearchValues.fromDate));
    }

    if (this.eventSearchValues.toDate){
      params.append( 'toDate', this.mapEventDate(this.eventSearchValues.toDate));
    }
    return UrlEnum.eventUrl + '?' + params;
  }

  private mapEventDate(date: any) {
    let s = this.pipe.transform(date,"yyyy-MM-dd");
    return s.toString();
  }
}
