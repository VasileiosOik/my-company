import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddingDepartmentComponent} from './adding-department.component';

describe('AddingDepartmentComponent', () => {
  let component: AddingDepartmentComponent;
  let fixture: ComponentFixture<AddingDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddingDepartmentComponent]
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
