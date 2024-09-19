import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router:Router;
  let routerlinks:any;
  let linkDes:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers:[provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router)
    fixture.detectChanges();
    linkDes=fixture.debugElement.queryAll(By.css("a.nav-link"));

    //routerlinks=linkDes.map((de:any)=>{de.inject().get(RouterLink)})
    console.log("linkDes"+linkDes);
    console.log(routerlinks)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("Should Navigate",()=>{

    expect(linkDes.length).toBe(2)
  })
  it ("Should Navigate to employeeList once u click on it",fakeAsync(()=>{
console.log(linkDes[0].nativeElement.href)
console.log(linkDes[1].nativeElement.href)
console.log(linkDes[2].nativeElement.href)
console.log(linkDes[3].nativeElement.href)
console.log("ru"+router.url)

    const listDebugElement=linkDes[1];

    listDebugElement.triggerEventHandler('click',{button:0});
    
flush()
    expect(router.url).toBe("/")
  })
)

});

