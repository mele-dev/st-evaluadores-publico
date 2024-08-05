import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationResultsPageComponent } from './evaluation-results-page.component';

describe('EvaluationResultsPageComponent', () => {
  let component: EvaluationResultsPageComponent;
  let fixture: ComponentFixture<EvaluationResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationResultsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
