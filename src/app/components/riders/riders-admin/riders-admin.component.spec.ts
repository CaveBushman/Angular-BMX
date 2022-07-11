import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersAdminComponent } from './riders-admin.component';

describe('RidersAdminComponent', () => {
  let component: RidersAdminComponent;
  let fixture: ComponentFixture<RidersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidersAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RidersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
