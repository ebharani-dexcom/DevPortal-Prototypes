import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportComponent } from './support.component';
import { ApiService } from 'src/app/api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Request} from '../../request';


describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;
  let http: HttpTestingController;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ SupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on submit api should give success response', () => {
    let response = "Thank you for submitting the feedback!";
    let request = new Request();
    request.category="1";
    request.description="test";
    request.subject="test";
    component = new SupportComponent(service);
    service.createCustomer(request).subscribe(res=>{
      expect(res).toBe(response);
      });
      const req = http.expectOne(service.apiURL); 
      console.dir(req);
      expect(req.request.method).toBe("POST");
      req.flush(response);
  });
});
