import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEmployeeComponent } from './adding-employee.component';

describe('AddingEmployeeComponent', () => {
  let component: AddingEmployeeComponent;
  let fixture: ComponentFixture<AddingEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
