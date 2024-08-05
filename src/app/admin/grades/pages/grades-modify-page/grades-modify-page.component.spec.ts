import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesModifyPageComponent } from './grades-modify-page.component';

describe('GradesModifyPageComponent', () => {
  let component: GradesModifyPageComponent;
  let fixture: ComponentFixture<GradesModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
