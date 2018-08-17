import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddingEmployeeComponent} from '../adding-employee/adding-employee.component';
import {ListingEmployeeComponent} from '../listing-employee/listing-employee.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorMessageModule} from '../../shared/error-message/error-message-module/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    NgbModule.forRoot()
  ],
  declarations: [AddingEmployeeComponent, ListingEmployeeComponent]
})
export class EmployeeModule {
}
