import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuIconComponent } from './lu-icon.component';

describe('LuIconComponent', () => {
  let component: LuIconComponent;
  let fixture: ComponentFixture<LuIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuIconComponent]
    });
    fixture = TestBed.createComponent(LuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
