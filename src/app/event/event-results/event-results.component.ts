import {Component, Input, OnInit} from '@angular/core';
import {EventReport} from '../model/event-report';
import {BaseModel} from '../../shared/models/base-model';

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.css']
})
export class EventResultsComponent extends BaseModel implements OnInit {

  @Input('eventReport') eventReport: Array<EventReport>;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
