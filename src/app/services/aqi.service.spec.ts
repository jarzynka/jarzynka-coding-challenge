import { TestBed } from '@angular/core/testing';

import { AqiService } from './aqi.service';

describe('AqiService', () => {
  let service: AqiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AqiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
