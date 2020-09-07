import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme1Page } from './filme1.page';

describe('Filme1Page', () => {
  let component: Filme1Page;
  let fixture: ComponentFixture<Filme1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
