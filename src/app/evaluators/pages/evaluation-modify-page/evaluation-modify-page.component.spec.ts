import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationModifyPageComponent } from './evaluation-modify-page.component';

describe('EvaluationModifyPageComponent', () => {
  let component: EvaluationModifyPageComponent;
  let fixture: ComponentFixture<EvaluationModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
