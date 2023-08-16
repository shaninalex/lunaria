import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuInputComponent } from './lu-input.component';

describe('LuInputComponent', () => {
  let component: LuInputComponent;
  let fixture: ComponentFixture<LuInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuInputComponent]
    });
    fixture = TestBed.createComponent(LuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
