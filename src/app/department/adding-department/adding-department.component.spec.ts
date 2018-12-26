import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddingDepartmentComponent} from './adding-department.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('AddingDepartmentComponent', () => {
  let component: AddingDepartmentComponent;
  let fixture: ComponentFixture<AddingDepartmentComponent>;

  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      declarations: [AddingDepartmentComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
