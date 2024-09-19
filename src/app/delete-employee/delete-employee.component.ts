import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef ,} from '@angular/material/dialog';
import { EmployeeService } from '../service/employeeservice';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [MatDialogModule],
//  providers: [
//     {
//       provide: MatDialogRef,
//       useValue: {}
//     }],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  [x: string]: any;
  @Input()
  empId: any;
  data: any;
  modalRef: any;
  message: any;
  action: any;
  ;

  constructor(private router:Router, public matDialog:MatDialog,private snackbar:MatSnackBar, public dialogRef: MatDialogRef<DeleteEmployeeComponent>,private service:EmployeeService){
  };
  // @ViewChild('template') templateRef: TemplateRef<any>;

  // ngAfterViewInit() {
  //   const user = {
  //       id: 10
  //     };
  //   this.modalRef = this.modalService.show(this.templateRef, {
  //     initialState : user
  //   });
  // }
  onNoClick(){
    this.dialogRef.close();
  }
duration:any;
  deleteEmployee(){
    console.log(this.empId);
    this.service.deleteEmployee(this.empId).subscribe(res=>{
console.log("Delete"+JSON.stringify(res));
      this.data=res;
      this.message="Employee with Id:"+this.empId+"Deleted Successfully";
      this.action ="X";
    
           
    
      this.snackbar.open(this.message,this.action,{
        duration: 2000,
      });

    })


   
    this.dialogRef.close();
    

  }
  
}


