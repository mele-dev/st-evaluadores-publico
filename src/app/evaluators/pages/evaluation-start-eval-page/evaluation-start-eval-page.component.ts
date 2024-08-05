import { Component, OnInit, inject } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-start-eval-page',
  templateUrl: './evaluation-start-eval-page.component.html',
  styleUrl: './evaluation-start-eval-page.component.css'
})
export class EvaluationStartEvalPageComponent implements OnInit {

  public evaluationsList: Evaluation[] = [];

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);


  async ngOnInit(): Promise<void> {
    this.evaluationsList = await this.evaluationService.getEvaluations();
  }

  public triggerWaitingConenctionEvent(evaluation: Evaluation) {
    try {
      this.evaluationService.updateEvaluationStatusToWaiting(evaluation.id);

      this.router.navigate([`evaluators/${evaluation.id}/connection`]);
    } catch (error: any) {
      console.log(`error = ${error.message}`);
    }
  }
}
