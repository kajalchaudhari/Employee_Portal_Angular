

import { JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule, } from "@angular/material/card";
import { EmployeeService } from "../service/employeeservice";
import { Employee } from "../../employee";
import { Router } from "@angular/router";
import { DeleteEmployeeComponent } from "../delete-employee/delete-employee.component";
import { MatDialog } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ ReactiveFormsModule,JsonPipe,MatCardModule, MatButtonModule,MatInput],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  newEmployee: Employee = new Employee();
  id: number | undefined;
  isResetted: boolean=false;
  isRegistered=false;

  constructor(private service:EmployeeService,private router:Router,private dialog:MatDialog){


  }

 employeeForm = new FormGroup({

  empName: new FormControl('',Validators.required),
  empId: new FormControl('',Validators.required),
  experience: new FormControl('',Validators.required)
  
  
})



formvalue:any;
onRegister(){
  
  this.formvalue=this.employeeForm.value;
  console.log(this.formvalue);
  this.service.addEmployee(this.formvalue).subscribe(res=>{
  console.log(res);
    this.newEmployee=res;
  })

  
  this.isRegistered=true;
 


}
navigateToUpdate(){
  const empid=this.newEmployee.empId;
  this.router.navigate(["update-employee",empid])

}

navigateToDelete(){
  const dialogRef = this.dialog.open(DeleteEmployeeComponent);
  console.log(this.newEmployee.empId)
  this.id=this.newEmployee.empId;
  dialogRef.componentInstance.empId=this.id;
    /* 
      Handles what happens after the modal dialog is closed
    */
    dialogRef.afterClosed().subscribe(result => {
      
        this.employeeForm.reset();
        this.isRegistered=false;
        this.isResetted=false;
    
    });
  
}

resetForm(){
  this.employeeForm.reset();
  //this.isRegistered=false;
  this.isResetted=false;
}
}
