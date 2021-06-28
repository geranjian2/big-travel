import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesViajesListComponent } from './naves-viajes-list.component';

describe('NavesViajesListComponent', () => {
  let component: NavesViajesListComponent;
  let fixture: ComponentFixture<NavesViajesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavesViajesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesViajesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
