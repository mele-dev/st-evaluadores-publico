import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorsLayoutComponent } from './evaluators-layout.component';

describe('EvaluatorsLayoutComponent', () => {
  let component: EvaluatorsLayoutComponent;
  let fixture: ComponentFixture<EvaluatorsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluatorsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluatorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
