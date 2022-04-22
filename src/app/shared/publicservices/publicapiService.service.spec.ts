/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicapiServiceService } from './publicapiService.service';

describe('Service: PublicapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicapiServiceService]
    });
  });

  it('should ...', inject([PublicapiServiceService], (service: PublicapiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
