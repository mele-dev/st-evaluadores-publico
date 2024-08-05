import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesCreatePageComponent } from './grades-create-page.component';

describe('GradesCreatePageComponent', () => {
  let component: GradesCreatePageComponent;
  let fixture: ComponentFixture<GradesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
