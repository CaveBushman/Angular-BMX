import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderNewComponent } from './rider-new.component';

describe('RiderNewComponent', () => {
  let component: RiderNewComponent;
  let fixture: ComponentFixture<RiderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
