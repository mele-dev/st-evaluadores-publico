import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorsTestPartsListPageComponent } from './evaluators-test-parts-list-page.component';

describe('EvaluatorsTestPartsListPageComponent', () => {
  let component: EvaluatorsTestPartsListPageComponent;
  let fixture: ComponentFixture<EvaluatorsTestPartsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluatorsTestPartsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluatorsTestPartsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
