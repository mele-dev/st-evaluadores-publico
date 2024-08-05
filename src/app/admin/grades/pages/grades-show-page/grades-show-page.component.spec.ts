import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesShowPageComponent } from './grades-show-page.component';

describe('GradesShowPageComponent', () => {
  let component: GradesShowPageComponent;
  let fixture: ComponentFixture<GradesShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
