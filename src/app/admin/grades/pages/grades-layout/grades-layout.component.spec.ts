import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesLayoutComponent } from './grades-layout.component';

describe('GradesLayoutComponent', () => {
  let component: GradesLayoutComponent;
  let fixture: ComponentFixture<GradesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
