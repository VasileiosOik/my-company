export class Employee {

  id: number;
  name: string;
  lName: string;
  jobTitle: string;
  hireDate: string;
  managerId: number;
  departmentId: number;


  constructor(id?: number, name?: string, lName?: string, jobTitle?: string, hireDate?: string, managerId?: number, departmentId?: number) {
    this.id = id;
    this.name = name;
    this.lName = lName;
    this.jobTitle = jobTitle;
    this.hireDate = hireDate;
    this.managerId = managerId;
    this.departmentId = departmentId;
  }
}
