import { TestBed } from '@angular/core/testing';

import { Gitsearch2Service } from './gitsearch2.service';

describe('Gitsearch2Service', () => {
  let service: Gitsearch2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gitsearch2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
