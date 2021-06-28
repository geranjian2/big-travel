import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDefaultComponent } from './checkbox-default.component';

describe('CheckboxDefaultComponent', () => {
  let component: CheckboxDefaultComponent;
  let fixture: ComponentFixture<CheckboxDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
