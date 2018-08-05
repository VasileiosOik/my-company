import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  private employeeUrl = 'http://localhost:8081/JavaApplication/company';

  public getEmployees():  Observable<any>{
    return this.http.get(`${this.employeeUrl}` + `/employees`);
  }

  public deleteEmployee(employee): Observable<any> {
    console.log(employee.id);
    return this.http.delete(`${this.employeeUrl}/employees/${employee.id}`);
  }

  public createEmployee(employee): Observable<any> {
    return this.http.post(`${this.employeeUrl}` + `/employee`, employee, httpOptions);
  }
}
