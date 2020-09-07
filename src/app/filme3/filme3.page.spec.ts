import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme3Page } from './filme3.page';

describe('Filme3Page', () => {
  let component: Filme3Page;
  let fixture: ComponentFixture<Filme3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
