import { TestBed } from '@angular/core/testing';

import { ComponentHelperService } from './component-helper.service';

describe('ComponentHelperService', () => {
  let service: ComponentHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate unique values "getUniqueID()"', () => {
    expect(service.getUniqueID() === service.getUniqueID()).toBeFalse();
  })
});
