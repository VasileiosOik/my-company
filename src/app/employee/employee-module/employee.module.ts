import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddingEmployeeComponent} from '../adding-employee/adding-employee.component';
import {ListingEmployeeComponent} from '../listing-employee/listing-employee.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorMessageModule} from '../../shared/error-message/error-message-module/error-message.module';
import {FilterPipeModule} from "ngx-filter-pipe";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    FilterPipeModule,
    OrderModule,
    NgbModule.forRoot()
  ],
  declarations: [AddingEmployeeComponent, ListingEmployeeComponent]
})
export class EmployeeModule {
}
