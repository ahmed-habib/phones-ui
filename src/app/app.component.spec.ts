import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {​​​​​​​​ PhonesComponent }​​​​​​​​ from'./phones/phones.component';
import { HttpClientModule } from '@angular/common/http';
import { Services } from './services/services';
import { HelperService } from './shared/helper.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, PhonesComponent
      ],
      imports: [HttpClientModule],
      providers: [Services,HelperService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
