import { TestBed, inject } from '@angular/core/testing';

import { JeopardyDataService } from './jeopardy-data.service';

describe('JeopardyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeopardyDataService]
    });
  });

  it('should be created', inject([JeopardyDataService], (service: JeopardyDataService) => {
    expect(service).toBeTruthy();
  }));
});
