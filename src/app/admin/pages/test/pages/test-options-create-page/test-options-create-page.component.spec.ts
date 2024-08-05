import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOptionsCreatePageComponent } from './test-options-create-page.component';

describe('TestOptionsCreatePageComponent', () => {
  let component: TestOptionsCreatePageComponent;
  let fixture: ComponentFixture<TestOptionsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestOptionsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestOptionsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
