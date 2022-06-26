import { TestBed } from '@angular/core/testing';

import { NewsAPIService } from './news-api.service';

describe('LoginService', () => {
  let service: NewsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
