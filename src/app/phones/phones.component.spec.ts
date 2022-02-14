import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Services } from '../services/services';
import { PhonesComponent } from './phones.component';
import * as Rx from 'rxjs';
describe('PhonesComponent', () => {
  let component: PhonesComponent;
  let fixture: ComponentFixture<PhonesComponent>;
  let callServices: Services;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [Services]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    callServices = TestBed.get(Services);
   
  });

  it('should test that PhonesComponent have been created', () => {
    expect(component).toBeTruthy();
  });

  it('should test getPcnsDataFromServer() with data returned', () => {  
      let getCountriesPhones = spyOn(callServices,"getPhonesDataFromServer").and.callFake(() => {
        return Rx.of([
          {"id":31,"name":"EMILE CHRISTIAN KOUKOU DIKANDA HONORE ","phone":"(237) 697151594","country":"Cameroon","state":"OK","country_code":"+237","phone_num":"697151594"},{"id":32,"name":"MICHAEL MICHAEL","phone":"(237) 677046616","country":"Cameroon","state":"OK","country_code":"+237","phone_num":"677046616"}

        ]);
      });    
      component.getPhonesData();
      expect(component.getPhonesData).toHaveBeenCalled; 
      expect(component.PhonesData.length).toBe(2);
  });

  it('should test getPcnsDataFromServer() with no data returned', () => { 
    let getCountriesPhones2 = spyOn(callServices,"getPhonesDataFromServer").and.callFake(() => {
      return Rx.of([       

      ]);
    });     
    component.getPhonesData();
    expect(component.getPhonesData).toHaveBeenCalled; 
    expect(component.PhonesData.length).toBe(0);
});

    
});
