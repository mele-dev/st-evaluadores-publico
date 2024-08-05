import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationUsersInEvalComponent } from './evaluation-users-in-eval.component';

describe('EvaluationUsersInEvalComponent', () => {
  let component: EvaluationUsersInEvalComponent;
  let fixture: ComponentFixture<EvaluationUsersInEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationUsersInEvalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationUsersInEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
