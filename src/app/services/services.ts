import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CustomerDto } from '../models/customer-dto.model';
import { ResponseModelDTO } from '../models/response-model-dto.model';
import { Observable } from 'rxjs';
import { ServiceUtils } from '../shared/ServiceUtils';
import { map, catchError } from 'rxjs/operators';
import { HelperService } from '../shared/helper.service';

@Injectable({
  providedIn: 'root'
})
export class Services {

  url = ServiceUtils.baseUrl + '/customers';
  header: HttpHeaders;
  constructor(private httpClient:HttpClient,private helperService:HelperService) { }

  getCustomers(country_code, state): Observable<CustomerDto[]> {
    
        //call service URL with GET Action and get all customers
      const resultObs: Observable<CustomerDto[]> = this.httpClient.get<ResponseModelDTO>(this.url+ '/' +  country_code + '/' + state, { headers: this.header })
      .pipe(
        map(this.helperService.extractData),
        catchError(
              (error: any, caught: any) => {
                this.helperService.handleErrorObservable(error);
                  throw error;
              }
          ),
      );

    return resultObs;
        
    }
}
