import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesListPageComponent } from './grades-list-page.component';

describe('GradesListPageComponent', () => {
  let component: GradesListPageComponent;
  let fixture: ComponentFixture<GradesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
