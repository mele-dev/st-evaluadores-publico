import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionsModifyPageComponent } from './test-questions-modify-page.component';

describe('TestQuestionsModifyPageComponent', () => {
  let component: TestQuestionsModifyPageComponent;
  let fixture: ComponentFixture<TestQuestionsModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestQuestionsModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestQuestionsModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
