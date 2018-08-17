import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlEnum} from '../../shared/enums/url.enum';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentUrl = UrlEnum.url;

  constructor(private http: HttpClient) {
  }

  public getDepartments(): Observable<any> {
    return this.http.get(`${this.departmentUrl}` + `/departments`, httpOptions);
  }

  public deleteDepartment(department): Observable<any> {
    console.log(department.depName);
    return this.http.delete(`${this.departmentUrl}/departments/${department.depName}`);
  }

  public createDepartment(department): Observable<any> {
    return this.http.post(`${this.departmentUrl}` + `/department`, department);
  }
}
