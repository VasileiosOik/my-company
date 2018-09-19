import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeModule} from './employee/employee-module/employee.module';
import {DepartmentModule} from './department/department-module/department.module';
import {ErrorMessageModule} from './shared/error-message/error-message-module/error-message.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentService} from './department/adding-department/department.service';
import {EmployeeService} from './employee/adding-employee/employee.service';
import {EventModule} from './event/event-module/event.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    DepartmentModule,
    ErrorMessageModule,
    EventModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
