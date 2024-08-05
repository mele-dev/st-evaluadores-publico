import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPartsShowPageComponent } from './test-parts-show-page.component';

describe('TestPartsShowPageComponent', () => {
  let component: TestPartsShowPageComponent;
  let fixture: ComponentFixture<TestPartsShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestPartsShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPartsShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
