import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderNew3Component } from './rider-new3.component';

describe('RiderNew3Component', () => {
  let component: RiderNew3Component;
  let fixture: ComponentFixture<RiderNew3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderNew3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderNew3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
