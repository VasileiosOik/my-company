import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {EventComponent} from '../event.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorMessageModule} from '../../shared/error-message/error-message-module/error-message.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRippleModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {EventResultsDepartmentComponent} from '../event-results-department/event-results-department.component';
import {EventResultsEmployeeComponent} from '../event-results-employee/event-results-employee.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [DatePipe],
  declarations: [EventComponent, EventResultsDepartmentComponent,EventResultsEmployeeComponent]
})
export class EventModule {
}
