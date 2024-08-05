import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthenticationRuleValidationService } from '../../authentication-rule-validation.service';
import { CardModalComponent } from '../../../shared/components/card-modal/card-modal.component';

@Component({
  selector: 'app-password-required-modal',
  templateUrl: './password-required-modal.component.html',
  styleUrl: './password-required-modal.component.css'
})
export class PasswordRequiredModalComponent {
  isOpen = false;
  password = "";
  @Output() OnConfirmation = new EventEmitter<string>();
  @ViewChild('modal') modal!: CardModalComponent;
  private error = "";

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }

  constructor(
    public ruleValidationService: AuthenticationRuleValidationService
  ) { }

  setError(error: string) {
    this.error = error;
  }

  getError(): string {
    return this.error;
  }
}
