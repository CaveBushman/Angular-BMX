import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderNew2Component } from './rider-new2.component';

describe('RiderNew2Component', () => {
  let component: RiderNew2Component;
  let fixture: ComponentFixture<RiderNew2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderNew2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderNew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
