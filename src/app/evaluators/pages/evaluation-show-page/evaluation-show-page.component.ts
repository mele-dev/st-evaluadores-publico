import { Component, Input, inject } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-show-page',
  templateUrl: './evaluation-show-page.component.html',
  styleUrl: './evaluation-show-page.component.css'
})
export class EvaluationShowPageComponent {

  public evaluation: Evaluation = {} as Evaluation;
  private router: Router = inject(Router);

  private evaluationService: EvaluationService = inject(EvaluationService);

  @Input()
  public id?: number


  ngOnInit() {
    this.evaluationService.getEvaluationById(this.id!).then((evaluation) => {
      this.evaluation = evaluation;
    });
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
