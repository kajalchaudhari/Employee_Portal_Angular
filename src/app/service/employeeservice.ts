import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }



  getAllEmployee() {

    return this.http.get("http://localhost:3001/getallemployee");
  }


  addEmployee(emp: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    };
    return this.http.post("http://localhost:3001/addEmployee", emp);

  }
  getEmployeeByid(empId: any) {

    return this.http.get(`http://localhost:3001/employee/${empId}`);
  }

  updateEmployee(empId: any, employee: any) {
    return this.http.put(`http://localhost:3001/employee/${empId}`, employee);
  }
  deleteEmployee(empId: any) {
    return this.http.delete(`http://localhost:3001/employees/${empId}`);
  }
}
