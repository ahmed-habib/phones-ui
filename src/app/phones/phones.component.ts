import { Component, OnInit,  PLATFORM_ID, Inject } from '@angular/core'
import { Services } from '../services/services';
import { isPlatformBrowser} from '@angular/common';
import { HelperService } from '../shared/helper.service';
import { CustomerDto } from '../models/customer-dto.model';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  public PhonesData: CustomerDto[] = [];
  public country_code: string = 'all';
  public state: string = 'all';
  public countries = [{"code":"+237", "name":"Cameroon"}, {"code":"+251", "name":"Ethiopia"}, {"code":"+212", "name":"Morocco"}, {"code":"+258", "name":"Mozambique"}, {"code":"+256", "name":"Uganda"}]
  constructor(private callServices: Services, @Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) { 
        this.getPhonesData();
      }
    }

    /**
     * Get Countries Phones Data
    */
    getPhonesData(){
      this.PhonesData = [];
      this.callServices.getCustomers(this.country_code, this.state).subscribe(
        res => 
        {
          this.PhonesData = res;
        },
        error => {
         let errorMessage = 'Bad Request'; 
         if(error.error.customCode != null){
           errorMessage=error.error.customMessage;
         }
         console.log('show error message in alert popup '+errorMessage);
        });

    }
    /**
     * on Change Country
    */
    onChangeCountry(country_code: string){
      this.country_code = country_code;
      this.getPhonesData();
    }
    /**
     * on Change State
    */
    onChangeState(state: string){
      this.state = state;
      this.getPhonesData();
    }



}
