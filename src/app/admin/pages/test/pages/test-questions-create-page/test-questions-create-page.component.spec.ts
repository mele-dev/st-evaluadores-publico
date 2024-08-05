import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionsCreatePageComponent } from './test-questions-create-page.component';

describe('TestQuestionsCreatePageComponent', () => {
  let component: TestQuestionsCreatePageComponent;
  let fixture: ComponentFixture<TestQuestionsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestQuestionsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestQuestionsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
