import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employeeservice';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, provideHttpClient } from '@angular/common/http';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService,
      ]
    });
    employeeService = TestBed.inject(EmployeeService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  })

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  it('Get Employees', () => {
    const MockEmpData = [{ empId: 232156, empName: 'Kajal Chaudhari', experience: 45 },
    { empId: 232156, empName: 'Divya Maheshwari', experience: 30 }]
    employeeService.getAllEmployee().subscribe((response: any) => {
      expect(response).withContext("should be truthy").toBeTruthy;
      expect(response.length).toBe(2);



    })
    const apiURL = "http://localhost:3001";
    const req = httpTesting.expectOne("http://localhost:3001/getallemployee");
    console.log(req.request.url)
    expect(req.request.method).toEqual("GET");
    req.flush(MockEmpData);



  })
  it('Get Employee By ID', () => {
    const ID = 232156
    const MockEmpData = { empId: 232156, empName: 'Kajal Chaudhari', experience: 45 }

    employeeService.getEmployeeByid(ID).subscribe((response: any) => {
      expect(response).withContext("should be truthy").toBeTruthy;
      expect(response.empName).toEqual("Kajal Chaudhari")

    })

    const req = httpTesting.expectOne(`http://localhost:3001/employee/${ID}`);
    console.log(req.request.url)
    expect(req.request.method).toEqual("GET");
    req.flush(MockEmpData);



  })
  it('Add Employee', () => {
    const ID = 232156
    const MockNewEmp = { empId: 123456, empName: 'Ronit Bhatia', experience: 5 }

    employeeService.addEmployee(MockNewEmp).subscribe((response: any) => {
      expect(response).withContext("should be truthy").toBeTruthy;
      expect(response.empName).toEqual("Ronit Bhatia")

    })

    const req = httpTesting.expectOne("http://localhost:3001/addEmployee");
    console.log(req.request.url)
    expect(req.request.method).toEqual("POST");
    req.flush(MockNewEmp);



  })

  it('updates Employee', () => {
    const ID = 123456
    const MockNewEmp = { empId: 123456, empName: 'Diya Bhatia', experience: 26 }

    employeeService.updateEmployee(ID, MockNewEmp).subscribe((response: any) => {
      expect(response).withContext("should be truthy").toBeTruthy;
      expect(response.empName).toEqual("Diya Bhatia")

    })

    const req = httpTesting.expectOne(`http://localhost:3001/employee/${ID}`);
    console.log(req.request.url)
    expect(req.request.method).toEqual("PUT");
    req.flush(MockNewEmp);

  })
  it(' Failure updates Employee', () => {
    const ID = 564654
    const MockNewEmp = { empId: 123456, empName: 'Diya Bhatia', experience: 26 }

    employeeService.updateEmployee(ID, MockNewEmp).subscribe({
      next:()=>{
        console.log("in Next method")
      },
      error:(err:HttpErrorResponse)=>
        {
          expect(err.status).toBe(400);
        }

    })

    const req = httpTesting.expectOne(`http://localhost:3001/employee/${ID}`);
    console.log(req.request.url)
    expect(req.request.method).toEqual("PUT");
    req.flush("Failed to update Employee", { status: 400, statusText: "Id is not exist" });

  })
  it('Delete Employee', () => {
    const ID = 123456
    const MockNewEmp = { empId: 123456, empName: 'Diya Bhatia', experience: 26 }

    employeeService.deleteEmployee(ID).subscribe((response: any) => {
      expect(response).withContext("should be truthy").toBeTruthy;
      expect(response.status).toEqual(204)

    })

    const req = httpTesting.expectOne(`http://localhost:3001/employees/${ID}`);
    console.log(req.request.url)
    expect(req.request.method).toEqual("DELETE");
    req.flush({ status: 204 });
  });

})





