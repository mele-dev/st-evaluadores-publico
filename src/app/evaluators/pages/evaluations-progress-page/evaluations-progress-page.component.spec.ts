import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsProgressPageComponent } from './evaluations-progress-page.component';

describe('EvaluationsProgressPageComponent', () => {
  let component: EvaluationsProgressPageComponent;
  let fixture: ComponentFixture<EvaluationsProgressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationsProgressPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationsProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
