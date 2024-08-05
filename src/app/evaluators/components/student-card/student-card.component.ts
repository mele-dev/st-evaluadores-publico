import { Component, Input, OnInit, inject, EventEmitter, Output } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input({ required: true })
  name!: string;
  @Input({ required: true })
  result!: string;

  @Input()
  public card = {
    title: this.name,
    description: this.result
  }

}
