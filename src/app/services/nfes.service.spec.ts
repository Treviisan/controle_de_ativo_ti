import { TestBed } from '@angular/core/testing';
import { NfesService } from './nfes.service';

describe('NfeService', () => {
  let service: NfesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
