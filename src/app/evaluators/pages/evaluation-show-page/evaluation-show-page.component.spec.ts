import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationShowPageComponent } from './evaluation-show-page.component';

describe('EvaluationShowPageComponent', () => {
  let component: EvaluationShowPageComponent;
  let fixture: ComponentFixture<EvaluationShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
