import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddingDepartmentComponent} from '../adding-department/adding-department.component';
import {ListingDepartmentComponent} from '../listing-department/listing-department.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeModule} from '../../employee/employee-module/employee.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorMessageModule} from "../../shared/error-message/error-message-module/error-message.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    ErrorMessageModule,
    NgbModule.forRoot()
  ],
  declarations: [ AddingDepartmentComponent,
    ListingDepartmentComponent]
})
export class DepartmentModule { }
