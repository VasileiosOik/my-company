import {Component, Input, OnInit} from '@angular/core';
import {ErrorModel} from '../model/error-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() message: string;

  @Input() errorModel: ErrorModel;


  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  viewErrorDetails(content) {
    this.modalService.open(content);
  }

}
