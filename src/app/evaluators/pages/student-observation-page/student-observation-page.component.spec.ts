import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentObservationPageComponent } from './student-observation-page.component';

describe('StudentObservationPageComponent', () => {
  let component: StudentObservationPageComponent;
  let fixture: ComponentFixture<StudentObservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentObservationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentObservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
