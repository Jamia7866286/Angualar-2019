import { TestBed } from '@angular/core/testing';

import { WeatherappService } from './weatherapp.service';

describe('WeatherappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherappService = TestBed.get(WeatherappService);
    expect(service).toBeTruthy();
  });
});
