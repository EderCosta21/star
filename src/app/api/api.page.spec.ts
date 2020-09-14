import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiService } from './apiService';

describe('ApiService', () => {
  let component: ApiService;
  let fixture: ComponentFixture<ApiService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiService ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
