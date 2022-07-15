import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderNew1Component } from './rider-new1.component';

describe('RiderNew1Component', () => {
  let component: RiderNew1Component;
  let fixture: ComponentFixture<RiderNew1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderNew1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderNew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
