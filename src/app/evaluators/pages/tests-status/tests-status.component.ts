import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';
import { EvaluationTest, StudentEvaluation } from '../../interfaces/evaluation.interface';

@Component({
  selector: 'app-tests-status',
  templateUrl: './tests-status.component.html',
  styleUrl: './tests-status.component.css'
})
export class TestsStatusComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);

  @Input()
  private id?: number;

  public evaluationTestsList?: EvaluationTest[];
  public students: StudentEvaluation[] = [];

  async ngOnInit(): Promise<void> {
    if (this.id) {
      console.log(`this.id = ${this.id}`);
      this.evaluationTestsList = await this.evaluationService.getEvaluationTests(this.id);

      this.students = await this.evaluationService.getStudentsInEvaluation(this.id);
    }
  }

  public async startTest(testId: number) {
    try {
      if (this.id) {
        await this.evaluationService.startTest(this.id, testId);

        this.router.navigate([`evaluators/${this.id}/test/${testId}`]);
      }
    } catch (error: any) {
      console.log(`error = ${error.message}`);
    }
  }
}
