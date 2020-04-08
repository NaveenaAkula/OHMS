import { TestBed } from '@angular/core/testing';

import { MyBookingService } from './my-booking.service';

describe('MyBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBookingService = TestBed.get(MyBookingService);
    expect(service).toBeTruthy();
  });
});
