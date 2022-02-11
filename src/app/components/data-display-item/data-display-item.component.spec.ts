import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayItemComponent } from './data-display-item.component';

describe('DataDisplayItemComponent', () => {
  let component: DataDisplayItemComponent;
  let fixture: ComponentFixture<DataDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDisplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
