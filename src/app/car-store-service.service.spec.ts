import { TestBed } from '@angular/core/testing';

import { CarStoreServiceService } from './car-store-service.service';

describe('CarStoreServiceService', () => {
  let service: CarStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
