import { Component, OnInit } from '@angular/core';
import { Request } from '../../request'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  request:Request = new Request();
  service:ApiService;
  message = "";
  constructor(service:ApiService) {
    this.request.category = '';
    this.request.description = '';
    this.request.subject = '';
    this.service = service;
  }

  ngOnInit() {
  }
  onSubmit(){
  console.dir(this.request);
  this.service.createCustomer(this.request).subscribe(response=>{
  console.log(response);
  this.message = response.status;
  });
  }

}
