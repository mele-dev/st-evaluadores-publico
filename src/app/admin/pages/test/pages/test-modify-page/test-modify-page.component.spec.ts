import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModifyPageComponent } from './test-modify-page.component';

describe('TestModifyPageComponent', () => {
  let component: TestModifyPageComponent;
  let fixture: ComponentFixture<TestModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
