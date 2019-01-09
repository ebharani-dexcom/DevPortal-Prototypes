import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://supportrequest.free.beeceptor.com/support';
  constructor(private httpClient: HttpClient) { }
  public createCustomer(request: Request):Observable<any>{
      return this.httpClient.post<Request>(this.apiURL,request); 
  }

}
