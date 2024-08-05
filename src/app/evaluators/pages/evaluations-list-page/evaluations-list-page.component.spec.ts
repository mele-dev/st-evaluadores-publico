import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsListPageComponent } from './evaluations-list-page.component';

describe('EvaluationsListPageComponent', () => {
  let component: EvaluationsListPageComponent;
  let fixture: ComponentFixture<EvaluationsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
