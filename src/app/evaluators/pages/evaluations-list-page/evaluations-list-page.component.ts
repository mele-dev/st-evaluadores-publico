import { Component, OnInit, inject, Input } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { Evaluation } from '../../interfaces/evaluation.interface';


@Component({
  selector: 'app-evaluations-list-page',
  templateUrl: './evaluations-list-page.component.html',
  styleUrl: './evaluations-list-page.component.css'
})
export class EvaluationsListPageComponent implements OnInit {

  public evaluationsList: Evaluation[] = [];

  private evaluationService: EvaluationService = inject(EvaluationService);

  

  constructor() {
    this.id = 0
  }

  @Input()
  public id: number


  async ngOnInit() : Promise<void> {
    this.evaluationService.getEvaluations().then((evaluations: Evaluation[]) => {
      this.evaluationsList = evaluations;
    });
  }

  public onSubmit() {
    this.evaluationService.getEvaluationById(this.id)
  }

  public async delete(recievedEvaluation : Evaluation) 
  {
      this.evaluationService.deleteEvaluation(recievedEvaluation.id).then();
      this.evaluationsList = await this.evaluationService.getEvaluations();
  }

}
