import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Filme5Page } from './filme5.page';

describe('Filme5Page', () => {
  let component: Filme5Page;
  let fixture: ComponentFixture<Filme5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filme5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Filme5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
