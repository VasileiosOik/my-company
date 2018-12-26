import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingEmployeeComponent} from './listing-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {OrderModule} from 'ngx-order-pipe';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';
import {EmployeeService} from '../adding-employee/employee.service';
import {EmployeeServiceMock} from '../../mocks/employee-service-mock.service';

describe('ListingEmployeeComponent', () => {
  let component: ListingEmployeeComponent;
  let fixture: ComponentFixture<ListingEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingEmployeeComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, OrderModule, FilterPipeModule, ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [{provide: EmployeeService, useClass: EmployeeServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one user', async(() => {
    expect(component.employees.length).toEqual(1);
  }));

  it('html should render one user', async(() => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelectorAll('td');
    expect(element[0].innerText).toContain(1);
    expect(element[1].innerText).toContain('Bill');
    expect(element[2].innerText).toContain('Eco');
    expect(element[3].innerText).toContain('Developer');
    expect(element[4].innerText).toContain('2018-05-19');
    expect(element[5].innerText).toContain(100001);
    expect(element[6].innerText).toContain(1002);
  }))
});
