import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/core/services/alert.service';
import { PrivateApiService } from '../../private-api.service';

import { SlideProviderService } from './slide-provider.service';

describe('SlideProviderService', () => {
  let service: SlideProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PrivateApiService, AlertService, Store] });
    service = TestBed.inject(SlideProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
