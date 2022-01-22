import { TestBed } from '@angular/core/testing';

import { MusicSettingsService } from '../music-settings.service';

describe('MusicSettingsService', () => {
  let service: MusicSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
