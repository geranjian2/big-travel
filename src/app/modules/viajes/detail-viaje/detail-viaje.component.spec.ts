import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViajeComponent } from './detail-viaje.component';

describe('DetailViajeComponent', () => {
  let component: DetailViajeComponent;
  let fixture: ComponentFixture<DetailViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
