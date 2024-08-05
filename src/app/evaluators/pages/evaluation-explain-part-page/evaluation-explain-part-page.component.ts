import { Component, Input, OnInit, inject } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';
import { Part, Question } from '../../interfaces/evaluation.interface';

@Component({
  selector: 'app-evaluation-explain-part-page',
  templateUrl: './evaluation-explain-part-page.component.html',
  styleUrl: './evaluation-explain-part-page.component.css'
})
export class EvaluationExplainPartPageComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);

  public evaluationTestPartToExplain?: Part;
  public questions?: Question[] = [];

  @Input()
  private evaluationId?: number;

  @Input()
  private evaluationTestId?: number;

  @Input()
  private evaluationTestPartId?: number;

  async ngOnInit(): Promise<void> {
    if (this.evaluationId && this.evaluationTestId && this.evaluationTestPartId) {
      this.evaluationTestPartToExplain = await this.evaluationService.getEvaluationTestPartById(this.evaluationId, this.evaluationTestId, this.evaluationTestPartId);

      this.questions = await this.evaluationService.getPartExampleQuestions(this.evaluationId, this.evaluationTestId, this.evaluationTestPartId);
    }
  }

  public async startPart() {
    try {
      if (this.evaluationId && this.evaluationTestId && this.evaluationTestPartId) {
        await this.evaluationService.startPart(this.evaluationId, this.evaluationTestId, this.evaluationTestPartId);

        this.router.navigate([`evaluators/${this.evaluationId}/test/${this.evaluationTestId}/parts/${this.evaluationTestPartId}/progress`]);
      }
    } catch (error: any) {
      console.log(`error = ${error.message}`);
    }
  }
}
