import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingDepartmentComponent} from './listing-department.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {OrderModule} from 'ngx-order-pipe';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {ErrorMessageComponent} from '../../shared/error-message/error-message/error-message.component';

describe('ListingDepartmentComponent', () => {
  let component: ListingDepartmentComponent;
  let fixture: ComponentFixture<ListingDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDepartmentComponent, ErrorMessageComponent],
      imports: [FormsModule, HttpClientModule, OrderModule, FilterPipeModule, ReactiveFormsModule, RouterModule.forRoot([])]
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
});
