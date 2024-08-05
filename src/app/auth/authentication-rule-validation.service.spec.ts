import { TestBed } from '@angular/core/testing';

import { AuthenticationRuleValidationService } from './authentication-rule-validation.service';

describe('AuthenticationRuleValidationService', () => {
  let service: AuthenticationRuleValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationRuleValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
