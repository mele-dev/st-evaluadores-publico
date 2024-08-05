import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCreateCardComponent } from './evaluation-create-card.component';

describe('EvaluationCreateCardComponent', () => {
  let component: EvaluationCreateCardComponent;
  let fixture: ComponentFixture<EvaluationCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationCreateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
