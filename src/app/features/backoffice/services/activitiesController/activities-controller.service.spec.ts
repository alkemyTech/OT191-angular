import { TestBed } from '@angular/core/testing';

import { ActivitiesControllerService } from './activities-controller.service';

describe('ActivitiesControllerService', () => {
  let service: ActivitiesControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
