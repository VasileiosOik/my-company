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
export class DepartmentService {

  constructor(private http: HttpClient) { }


  private departmentUrl = UrlEnum.url;

  public getDepartments(): Observable<any>{
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
