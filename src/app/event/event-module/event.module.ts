import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {EventComponent} from "../event.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorMessageModule} from "../../shared/error-message/error-message-module/error-message.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRippleModule
} from "@angular/material";
import {EventResultsComponent} from "../event-results/event-results.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    NgbModule.forRoot(),
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [DatePipe],
  declarations: [EventComponent, EventResultsComponent]
})
export class EventModule { }
