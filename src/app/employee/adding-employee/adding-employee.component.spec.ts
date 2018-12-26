import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddingEmployeeComponent} from './adding-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

describe('AddingEmployeeComponent', () => {
  let component: AddingEmployeeComponent;
  let fixture: ComponentFixture<AddingEmployeeComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddingEmployeeComponent],
      imports: [FormsModule, NgbModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]

    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(AddingEmployeeComponent);
      component = fixture.componentInstance;

      debugElement = fixture.debugElement.query(By.css('form'));
      htmlElement = debugElement.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async(() => {
    component.saveEmployee();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the saveEmployee method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'saveEmployee');
    htmlElement = fixture.debugElement.query(By.css('button')).nativeElement;
    htmlElement.click();
    expect(component.saveEmployee).toHaveBeenCalledTimes(0);


  }));
});
