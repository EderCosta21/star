import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme6Page } from './filme6.page';

describe('Filme6Page', () => {
  let component: Filme6Page;
  let fixture: ComponentFixture<Filme6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
