import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { EmployeeService } from '../service/employeeservice';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let employeeService:jasmine.SpyObj<EmployeeService>
  let el:DebugElement;
  beforeEach(async () => {
    const spy=jasmine.createSpyObj('EmployeService',['addEmployee'])
     await TestBed.configureTestingModule({
      imports: [AddEmployeeComponent],
      providers:[AddEmployeeComponent,
        {provide:EmployeeService,useValue:spy},
        provideHttpClient(),
        provideHttpClientTesting()]      })  
    .compileComponents();
    employeeService=TestBed.inject(EmployeeService)as jasmine.SpyObj<EmployeeService>

    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have input and button',()=>{
console.log(el.query(By.css("label")).nativeElement.innerText)

    expect(el.query(By.css("label")).nativeElement.innerText).toEqual("Employee Name");
expect(fixture.nativeElement.querySelector("input")).toBeTruthy();
expect(fixture.nativeElement.querySelector("button")).toBeTruthy();



  })
});
