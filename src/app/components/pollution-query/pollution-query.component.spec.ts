import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionQueryComponent } from './pollution-query.component';

describe('PollutionQueryComponent', () => {
  let component: PollutionQueryComponent;
  let fixture: ComponentFixture<PollutionQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
