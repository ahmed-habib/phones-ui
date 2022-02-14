import { Injectable } from '@angular/core';
import { ResponseModelDTO } from '../models/response-model-dto.model';
import {  HttpClient } from '@angular/common/http';


@Injectable()
export class HelperService {
  

    constructor(private httpClient: HttpClient) { }

  
    extractData(res: ResponseModelDTO | any): any {

        const body = res.data;

        //check status code if 2001 means success data so get response.data
        if (res.status.customCode == 2001) {
            return res.data;

        }
        //in case of change password
        else if (res.status.customCode == 4015) {
            throw new Error(JSON.stringify(res.status.customCode));

        }
        else {
            throw new Error(JSON.stringify(res.status.customMessage));
        }
    }

    handleErrorObservable(error: Response | any): any {

        if (error.customCode != null || error.customCode != 2001) {
            console.log(error);
        }
    }

}
