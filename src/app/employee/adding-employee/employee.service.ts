import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlEnum} from '../../shared/enums/url.enum';
import { map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = UrlEnum.url;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<any> {
    return this.http.get(`${this.employeeUrl}` + `/employees`).pipe(map(res => res));
  }

  public deleteEmployee(employee): Observable<any> {
    console.log('Deleted employee id: ', employee.id);
    return this.http.delete(`${this.employeeUrl}/employees/${employee.id}`);
  }

  public saveEmployee(employee): Observable<any> {
    if (employee.id === null) {
      console.log('Create a new Employee');
      return this.http.post(`${this.employeeUrl}/employee`, employee, httpOptions);
    } else {
      console.log('Update an Employee');
      return this.http.put(`${this.employeeUrl}/updateemployee/${employee.id}`, employee, httpOptions);
    }
  }

  public getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.employeeUrl}/oneemployee/${id}`, httpOptions);
  }
}
