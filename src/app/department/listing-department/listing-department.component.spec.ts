import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {ListingDepartmentComponent} from './listing-department.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {OrderModule} from 'ngx-order-pipe';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';
import {DepartmentService} from '../adding-department/department.service';
import {Observable} from 'rxjs/Rx';


describe('ListingDepartmentComponent', () => {
  let component: ListingDepartmentComponent;
  let fixture: ComponentFixture<ListingDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDepartmentComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, OrderModule, FilterPipeModule, ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [DepartmentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a department', inject([DepartmentService], (departmentService: DepartmentService) => {
    const mock = [];
    spyOn(departmentService, 'getDepartments').and.returnValue(Observable.of(mock.push({depId: '1', depName: 'IT'})));

    component.ngOnInit();

    expect(departmentService.getDepartments).toHaveBeenCalled();
   // expect(component.departments).toEqual(new Array(1));
  }));

  it('should return an error', inject([DepartmentService], (departmentService: DepartmentService) => {
    const mock = [];
    spyOn(departmentService, 'getDepartments').and.returnValue(Observable.throwError('error'));

    component.ngOnInit();

    expect(departmentService.getDepartments).toHaveBeenCalled();
   // expect(component.handleError).toHaveBeenCalled();
   // expect(component.departments).toBe([]);
   // expect(component.errorMessage).toBe('error');
  }));

});
