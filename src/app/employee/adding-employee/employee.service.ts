import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {UrlEnum} from "../../shared/url.enum";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeeUrl = UrlEnum.url;

  public getEmployees():  Observable<any>{
    return this.http.get(`${this.employeeUrl}` + `/employees`);
  }

  public deleteEmployee(employee): Observable<any> {
    console.log("Deleted employee id: ", employee.id);
    return this.http.delete(`${this.employeeUrl}/employees/${employee.id}`);
  }

  public saveEmployee(employee): Observable<any> {
    if (employee.id === null) {
      console.log("Create a new Employee");
      return this.http.post(`${this.employeeUrl}` + `/employee`, employee, httpOptions);
    } else {
      console.log("Update an Employee");
      return this.http.put(`${this.employeeUrl}` + `/updateemployee/` + `${employee.id}`, employee, httpOptions);
    }
  }

  public getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.employeeUrl}/oneemployee/`+ id, httpOptions);
  }
}
