import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPartsCreatePageComponent } from './test-parts-create-page.component';

describe('TestPartsCreatePageComponent', () => {
  let component: TestPartsCreatePageComponent;
  let fixture: ComponentFixture<TestPartsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestPartsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPartsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
