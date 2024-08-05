import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationStartEvalPageComponent } from './evaluation-start-eval-page.component';

describe('EvaluationStartEvalPageComponent', () => {
  let component: EvaluationStartEvalPageComponent;
  let fixture: ComponentFixture<EvaluationStartEvalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationStartEvalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationStartEvalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
