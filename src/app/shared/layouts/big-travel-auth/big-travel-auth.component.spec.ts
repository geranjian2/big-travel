import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTravelAuthComponent } from './big-travel-auth.component';

describe('BigTravelAuthComponent', () => {
  let component: BigTravelAuthComponent;
  let fixture: ComponentFixture<BigTravelAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTravelAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTravelAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
