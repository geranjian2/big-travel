import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTravelComponent } from './big-travel.component';

describe('BigTravelComponent', () => {
  let component: BigTravelComponent;
  let fixture: ComponentFixture<BigTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
