import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentNaveComponent } from './rent-nave.component';

describe('RentNaveComponent', () => {
  let component: RentNaveComponent;
  let fixture: ComponentFixture<RentNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
