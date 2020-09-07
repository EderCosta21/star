import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme4Page } from './filme4.page';

describe('Filme4Page', () => {
  let component: Filme4Page;
  let fixture: ComponentFixture<Filme4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
