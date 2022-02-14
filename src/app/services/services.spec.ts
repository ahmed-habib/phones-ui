import { TestBed } from '@angular/core/testing';

import { Services } from './services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import * as Rx from 'rxjs';
import {Observable,of, from } from 'rxjs';
describe('Services', () => {
  let service: Services;

  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      imports: [HttpClientModule, RouterTestingModule],
      providers: [Services]
    }).compileComponents();
    service = TestBed.inject(Services);
  });

  it('should test that Services created', () => {
    expect(service).toBeTruthy();
  });

  it('It Should Test getPhonesDataFromServer of service file with data returned', () => {
    let mockedres= Rx.of([   
      {"id":31,"name":"EMILE CHRISTIAN KOUKOU DIKANDA HONORE ","phone":"(237) 697151594","country":"Cameroon","state":"OK","country_code":"+237","phone_num":"697151594"},{"id":32,"name":"MICHAEL MICHAEL","phone":"(237) 677046616","country":"Cameroon","state":"OK","country_code":"+237","phone_num":"677046616"}
      ]);
    let getCountriesPhones = spyOn(service,"getPhonesDataFromServer").and.callFake(() => {
      return mockedres;
    });
    expect(service.getPhonesDataFromServer('all',  'all')).toEqual(mockedres);
  });

  it('It Should Test getPhonesDataFromServer of service file with no data returned', () => {
    let mockedres= Rx.of([ ]);   
    let getCountriesPhones = spyOn(service,"getPhonesDataFromServer").and.callFake(() => {
      return mockedres;
    });
    expect(service.getPhonesDataFromServer('all',  'all')).toEqual(mockedres);

  });
});
