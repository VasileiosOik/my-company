import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddingEmployeeComponent } from './employee/adding-employee/adding-employee.component';
import { ListingEmployeeComponent } from './employee/listing-employee/listing-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './employee/adding-employee/employee.service';
import {AppRoutingModule} from './app.routing.module';
import {ListingDepartmentComponent} from './department/listing-department/listing-department.component';
import {DepartmentService} from './department/adding-department/department.service';
import {AddingDepartmentComponent} from './department/adding-department/adding-department.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AddingEmployeeComponent,
    AddingDepartmentComponent,
    ListingEmployeeComponent,
    ListingDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
