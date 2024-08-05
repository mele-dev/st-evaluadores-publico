import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationExplainPartPageComponent } from './evaluation-explain-part-page.component';

describe('EvaluationExplainPartPageComponent', () => {
  let component: EvaluationExplainPartPageComponent;
  let fixture: ComponentFixture<EvaluationExplainPartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationExplainPartPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationExplainPartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
