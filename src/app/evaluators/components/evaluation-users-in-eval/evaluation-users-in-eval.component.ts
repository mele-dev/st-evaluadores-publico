import { Component, Input } from '@angular/core';
import { StudentEvaluation } from '../../interfaces/evaluation.interface';

@Component({
  selector: 'app-evaluation-users-in-eval',
  templateUrl: './evaluation-users-in-eval.component.html',
  styleUrl: './evaluation-users-in-eval.component.css'
})
export class EvaluationUsersInEvalComponent {

  @Input()
  public students: StudentEvaluation[] = [];
}
