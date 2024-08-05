import { Component, Input, OnInit, inject, EventEmitter, Output } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrl: './evaluation-card.component.css'
})
export class EvaluationCardComponent implements OnInit {

  private router = inject(Router);

  @Output()
  public onEvaluationDeleted = new EventEmitter<Evaluation>();

  @Input()
  public evaluation?: Evaluation;

  ngOnInit(): void {
    if (!this.evaluation) throw new Error('You must specify an evaluation.')
  }

  // Método para eliminar la evaluación
  public async deleteEvaluation() {

    if (!this.evaluation) throw new Error('You must specify an evaluation.');
    this.onEvaluationDeleted.emit(this.evaluation);
  }
}
