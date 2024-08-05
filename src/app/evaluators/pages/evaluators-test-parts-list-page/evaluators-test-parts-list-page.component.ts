import { Component, Input, OnInit, inject } from '@angular/core';
import { Part } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluators-test-parts-list-page',
  templateUrl: './evaluators-test-parts-list-page.component.html',
  styleUrl: './evaluators-test-parts-list-page.component.css'
})
export class EvaluatorsTestPartsListPageComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private router: Router = inject(Router);

  @Input()
  private evaluationId?: number;

  @Input()
  private evaluationTestId?: number;

  public evaluationTestPartsList: Part[] = [];

  async ngOnInit(): Promise<void> {

    console.log(`ACA NO ENTRA?`);
    if (this.evaluationId && this.evaluationTestId) {
      console.log(`aaaaaaaa this.evaluationTestId = ${this.evaluationTestId}`);
      this.evaluationTestPartsList = await this.evaluationService.getEvaluationTestParts(this.evaluationId, this.evaluationTestId);
    }
  }

  public async explainPart(evaluationTestPartId: number) {
    try {
      if (this.evaluationId && this.evaluationTestId) {
        await this.evaluationService.explainPart(this.evaluationId, this.evaluationTestId, evaluationTestPartId);

        this.router.navigate([`evaluators/${this.evaluationId}/test/${this.evaluationTestId}/parts/${evaluationTestPartId}/explain`]);
      }
    } catch (error: any) {
      console.log(`error = ${error.message}`);
    }
  }
}
