import { TestBed } from '@angular/core/testing';

import { OrganizationProviderService } from './organization-provider.service';

describe('OrganizationProviderService', () => {
  let service: OrganizationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
