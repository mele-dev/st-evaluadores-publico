import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOptionsModifyPageComponent } from './test-options-modify-page.component';

describe('TestOptionsModifyPageComponent', () => {
  let component: TestOptionsModifyPageComponent;
  let fixture: ComponentFixture<TestOptionsModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestOptionsModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestOptionsModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
