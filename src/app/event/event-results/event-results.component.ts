import {Component, Input, OnInit} from '@angular/core';
import {EventReport} from "../model/event-report";

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.css']
})
export class EventResultsComponent implements OnInit {

  @Input('eventReport') eventReport: Array<EventReport>;

  constructor() { }

  ngOnInit() {
  }

}
