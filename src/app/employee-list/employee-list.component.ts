import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employeeservice';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
 
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: any[]=[];
  id: any;


  constructor(private service:EmployeeService,private router:Router,private dialog:MatDialog){
    
  
  }
  ngOnInit(): void {
    this.loadEmp();
  }
  loadEmp() {
    this.service.getAllEmployee().subscribe((res:any) =>{
      console.log(res)
      this.employees=res;
    console.log(this.employees);
    })
  }

  onClick(){



  }
  navigateToUpdate(empId:any){
    const empid=empId;
    this.router.navigate(["update-employee",empid])
  
  }
  navigateToDelete(empId:any){
    const dialogRef = this.dialog.open(DeleteEmployeeComponent);
    console.log(empId)
    this.id=empId;
    dialogRef.componentInstance.empId=this.id;
      
      dialogRef.afterClosed().subscribe(result => {
        this.loadEmp();
         
      
      });
    
  }

}
