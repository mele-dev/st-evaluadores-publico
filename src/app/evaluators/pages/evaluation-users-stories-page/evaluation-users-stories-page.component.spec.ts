import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationUsersStoriesPageComponent } from './evaluation-users-stories-page.component';

describe('EvaluationUsersStoriesPageComponent', () => {
  let component: EvaluationUsersStoriesPageComponent;
  let fixture: ComponentFixture<EvaluationUsersStoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationUsersStoriesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationUsersStoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
