import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunariaComponent } from './lunaria.component';

describe('LunariaComponent', () => {
  let component: LunariaComponent;
  let fixture: ComponentFixture<LunariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
