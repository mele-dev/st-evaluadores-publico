import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationObservationPageComponent } from './evaluation-observation-page.component';

describe('EvaluationObservationPageComponent', () => {
  let component: EvaluationObservationPageComponent;
  let fixture: ComponentFixture<EvaluationObservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationObservationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationObservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
