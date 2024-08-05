import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsReportsPageComponent } from './groups-reports-page.component';

describe('GroupsReportsPageComponent', () => {
  let component: GroupsReportsPageComponent;
  let fixture: ComponentFixture<GroupsReportsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsReportsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
