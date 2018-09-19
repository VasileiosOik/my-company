import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddingEmployeeComponent} from './employee/adding-employee/adding-employee.component';
import {ListingEmployeeComponent} from './employee/listing-employee/listing-employee.component';
import {ListingDepartmentComponent} from './department/listing-department/listing-department.component';
import {AddingDepartmentComponent} from './department/adding-department/adding-department.component';
import {EventComponent} from './event/event.component';


const routes: Routes = [
  {path: 'employees', component: ListingEmployeeComponent},
  {path: 'employee/:id', component: AddingEmployeeComponent},
  {path: 'departments', component: ListingDepartmentComponent},
  {path: 'department', component: AddingDepartmentComponent},
  {path: 'event', component: EventComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
