import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationWaitingConnectionPageComponent } from './evaluation-waiting-connection-page.component';

describe('EvaluationWaitingConnectionPageComponent', () => {
  let component: EvaluationWaitingConnectionPageComponent;
  let fixture: ComponentFixture<EvaluationWaitingConnectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationWaitingConnectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationWaitingConnectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
