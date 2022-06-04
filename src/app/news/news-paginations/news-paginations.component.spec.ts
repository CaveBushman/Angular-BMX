import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaginationsComponent } from './news-paginations.component';

describe('NewsPaginationsComponent', () => {
  let component: NewsPaginationsComponent;
  let fixture: ComponentFixture<NewsPaginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPaginationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
