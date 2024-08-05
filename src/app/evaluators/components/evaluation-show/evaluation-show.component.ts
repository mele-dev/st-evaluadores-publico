import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild, inject } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-show',
  templateUrl: './evaluation-show.component.html',
  styleUrl: './evaluation-show.component.css'
})
export class EvaluationShowComponent implements OnInit {

  @Input() evaluation?: Evaluation;

  @Output()
  public evaluationEmitter: EventEmitter<Evaluation> = new EventEmitter<Evaluation>();
  @Output()
  public evalEmitter: EventEmitter<Evaluation> = new EventEmitter<Evaluation>();

  async ngOnInit(): Promise<void> {

  }

  @ViewChild('EvaluationShowComponent', { static: true }) componentOne!: ElementRef;

  constructor(private ngZone: NgZone) { }

  public emitEvaluation(evaluation: Evaluation) {
    this.evaluationEmitter.emit(evaluation);
  }

  public emitEval(evaluation: Evaluation) {
    this.evalEmitter.emit(evaluation);
  }

}
