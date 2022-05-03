import { TestBed } from '@angular/core/testing';

import { SlideProviderService } from './slide-provider.service';

describe('SlideProviderService', () => {
  let service: SlideProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
