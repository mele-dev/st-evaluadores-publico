import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequiredModalComponent } from './password-required-modal.component';

describe('PasswordRequiredModalComponent', () => {
  let component: PasswordRequiredModalComponent;
  let fixture: ComponentFixture<PasswordRequiredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordRequiredModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordRequiredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
