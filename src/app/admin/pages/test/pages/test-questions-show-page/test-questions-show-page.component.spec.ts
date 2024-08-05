import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionsShowPageComponent } from './test-questions-show-page.component';

describe('TestQuestionsShowPageComponent', () => {
  let component: TestQuestionsShowPageComponent;
  let fixture: ComponentFixture<TestQuestionsShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestQuestionsShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestQuestionsShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
