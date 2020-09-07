import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme2Page } from './filme2.page';

describe('Filme2Page', () => {
  let component: Filme2Page;
  let fixture: ComponentFixture<Filme2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
