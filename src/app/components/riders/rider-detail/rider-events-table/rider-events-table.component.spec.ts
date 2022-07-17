import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderEventsTableComponent } from './rider-events-table.component';

describe('RiderEventsTableComponent', () => {
  let component: RiderEventsTableComponent;
  let fixture: ComponentFixture<RiderEventsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderEventsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderEventsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
