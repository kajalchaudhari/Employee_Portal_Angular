import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employeeservice';
import { Employee } from '../../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  updatedEmp: Employee = new Employee();

  empId: any;
  prevValue: Employee = new Employee();
  newEmployee: any;
  message: any;
  action: any;

  constructor(private service: EmployeeService, private route: ActivatedRoute, private router: Router,private snackBar:MatSnackBar) {
    this.empId = this.route.snapshot.paramMap.get('id');
  };
  ngOnInit() {
    this.getData();
 

  }



  getData() {
    this.service.getEmployeeByid(this.empId).subscribe(response => {
      console.log(response)
      this.updatedEmp = response;
    }



    );
  }

  // this.prevValue=this.updatedEmp;
  onSubmit(form: any) {

    this.newEmployee = form.value;
    this.service.updateEmployee(this.empId, this.newEmployee).subscribe(res => {
      this.newEmployee = res

 this.message="Employee with Id:"+this.empId+"Updated Successfully";
      this.action ="X";
    
           
    
      this.snackBar.open(this.message,this.action,{
        duration: 2000,
      });
    });




  }
}


