import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationShowComponent } from './evaluation-show.component';

describe('EvaluationShowComponent', () => {
  let component: EvaluationShowComponent;
  let fixture: ComponentFixture<EvaluationShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
