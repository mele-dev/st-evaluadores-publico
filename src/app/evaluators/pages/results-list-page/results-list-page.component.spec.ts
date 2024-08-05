import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListPageComponent } from './results-list-page.component';

describe('ResultsListPageComponent', () => {
  let component: ResultsListPageComponent;
  let fixture: ComponentFixture<ResultsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
