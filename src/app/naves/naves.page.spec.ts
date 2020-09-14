import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavesPage } from './naves.page';

describe('NavesPage', () => {
  let component: NavesPage;
  let fixture: ComponentFixture<NavesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
