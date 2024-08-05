import { Component, Input, OnInit, inject } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';
import { StudentEvaluation } from '../../interfaces/evaluation.interface';

@Component({
  selector: 'app-evaluations-progress-page',
  templateUrl: './evaluations-progress-page.component.html',
  styleUrl: './evaluations-progress-page.component.css'
})
export class EvaluationsProgressPageComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);

  @Input()
  private evaluationId?: number;

  public students: StudentEvaluation[] = [];

  async ngOnInit(): Promise<void> {
    if (this.evaluationId) {
      this.students = await this.evaluationService.getStudentsInEvaluation(this.evaluationId);
    }
  }
}
