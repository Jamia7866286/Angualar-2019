import { TestBed } from '@angular/core/testing';

import { GithubdataService } from './githubdata.service';

describe('GithubdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubdataService = TestBed.get(GithubdataService);
    expect(service).toBeTruthy();
  });
});
