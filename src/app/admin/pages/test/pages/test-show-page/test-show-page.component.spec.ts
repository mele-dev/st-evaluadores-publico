import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShowPageComponent } from './test-show-page.component';

describe('TestShowPageComponent', () => {
  let component: TestShowPageComponent;
  let fixture: ComponentFixture<TestShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
