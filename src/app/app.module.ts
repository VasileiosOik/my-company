import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './employee/adding-employee/employee.service';
import {AppRoutingModule} from './app.routing.module';
import {DepartmentService} from './department/adding-department/department.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EmployeeModule} from './employee/employee-module/employee.module';
import {DepartmentModule} from './department/department-module/department.module';
import {ErrorMessageModule} from './shared/error-message/error-message-module/error-message.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    DepartmentModule,
    ErrorMessageModule,
    NgbModule.forRoot()
  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
