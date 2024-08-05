import { CSP_NONCE, Component, Input, OnInit, inject } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { Evaluation, StudentEvaluation } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-waiting-connection-page',
  templateUrl: './evaluation-waiting-connection-page.component.html',
  styleUrl: './evaluation-waiting-connection-page.component.css'
})
export class EvaluationWaitingConnectionPageComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);

  @Input()
  private id?: number;

  public evaluation?: Evaluation;
  public students: StudentEvaluation[] = [];

  async ngOnInit(): Promise<void> {
    if (this.id) {
      this.evaluation = await this.evaluationService.getEvaluationById(this.id);

      this.students = await this.evaluationService.getStudentsInEvaluation(this.evaluation.id);
    }
  }

  public async startEvaluation() {
    try {
      if (this.id) {
        await this.evaluationService.updateEvaluationStatusToEnabled(this.id);

        this.router.navigate([`evaluators/${this.id}/test`]);
      }
    } catch (error: any) {
      console.log(`error = ${error.message}`);
    }
  }
}
