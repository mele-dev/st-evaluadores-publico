import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPartsModifyPageComponent } from './test-parts-modify-page.component';

describe('TestPartsModifyPageComponent', () => {
  let component: TestPartsModifyPageComponent;
  let fixture: ComponentFixture<TestPartsModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestPartsModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPartsModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
