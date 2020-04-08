import { TestBed } from '@angular/core/testing';

import { RestHeadersService } from './rest-headers.service';

describe('RestHeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestHeadersService = TestBed.get(RestHeadersService);
    expect(service).toBeTruthy();
  });
});
