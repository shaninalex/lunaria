import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuButtonComponent } from './lu-button.component';

describe('LuButtonComponent', () => {
  let component: LuButtonComponent;
  let fixture: ComponentFixture<LuButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuButtonComponent]
    });
    fixture = TestBed.createComponent(LuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
