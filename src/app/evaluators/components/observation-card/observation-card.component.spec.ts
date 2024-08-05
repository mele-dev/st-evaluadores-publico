import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationCardComponent } from './observation-card.component';

describe('ObservationCardComponent', () => {
  let component: ObservationCardComponent;
  let fixture: ComponentFixture<ObservationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
