import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { HttpClientTestingModule,} from '@angular/common/http/testing';


import { EmployeeService } from '../service/employeeservice';
// import { of } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EmployeeListComponent', () => {
 
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let empService:jasmine.SpyObj<EmployeeService>
  let el:DebugElement
  beforeEach(async () => {
    const empSpy=jasmine.createSpyObj('EmployeeService',['getAllEmployee'])
    // empSpy.getAllEmployee.and.returnValue(of[]);
    await TestBed.configureTestingModule({

      imports: [EmployeeListComponent],
      providers:[EmployeeListComponent,
      {provide:EmployeeService,useValue:empSpy}]
    }).compileComponents();

     empService=TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeDefined();
  // });

  it("should load all Employees ",()=>{
    // expect(fixture.nativeElement.querySelector("table")).toBeTruthy()4
    const empMock=[{ empId: 232156, empName: 'Kajal Chaudhari', experience: 45 },
      { empId: 232156, empName: 'Divya Maheshwari', experience: 30 }];
      empService.getAllEmployee.and.returnValue(of(empMock));
      fixture.detectChanges();
      console.log(el.queryAll(By.css("tr")))
      expect(el.queryAll(By.css("tr")).length).toBe(3);


  })
});
