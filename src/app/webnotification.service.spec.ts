import { TestBed } from '@angular/core/testing';

import { WebnotificationService } from './webnotification.service';

describe('WebnotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebnotificationService = TestBed.get(WebnotificationService);
    expect(service).toBeTruthy();
  });
});
