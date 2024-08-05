import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationUsersStoryComponent } from './evaluation-users-story.component';

describe('EvaluationUsersStoryComponent', () => {
  let component: EvaluationUsersStoryComponent;
  let fixture: ComponentFixture<EvaluationUsersStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationUsersStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationUsersStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
