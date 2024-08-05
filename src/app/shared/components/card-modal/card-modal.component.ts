import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css'
})
export class CardModalComponent {
  @Output() openModal = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  open() {
    this.modal.nativeElement.showModal();
    this.openModal.emit();
  }

  close() {
    this.modal.nativeElement.close();
    this.closeModal.emit();
  }

}
