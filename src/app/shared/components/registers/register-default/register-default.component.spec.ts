import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDefaultComponent } from './register-default.component';

describe('RegisterDefaultComponent', () => {
  let component: RegisterDefaultComponent;
  let fixture: ComponentFixture<RegisterDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
