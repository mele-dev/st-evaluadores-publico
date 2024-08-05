import { Component, Input } from '@angular/core';
import { IPart} from '../../interfaces/IPart';
import { Router } from '@angular/router';
import { QuestionServiceService } from '../../questionService.service';
import { ITest } from '../../interfaces/ITest';
import { IQuestion } from '../../interfaces/IQuestion';



@Component({
  selector: 'app-questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrl: './questions-list-item.component.css'
})
export class QuestionsListItemComponent {
  constructor(private router : Router,
    private questionService: QuestionServiceService){
    }
  @Input() part!: IPart;
  @Input() test!: ITest;
  @Input() question!: IQuestion;
  @Input() testId?: number
  
  public toModifyQuestion(question : IQuestion){
    this.question.testId= this.testId
    let queadsdasd = this.questionService.getDatos(this.testId, this.question.partId, this.question.id);
    
    this.router.navigate([`/admin/test/${this.testId}/parts/${this.question.partId}/questions/${this.question.id}/modify/`])  }
  
  public onDeleteQuestion(question : IQuestion) {
    this.question.testId=this.testId
    this.questionService.deleateDatos(this.question)
    .then(() => {
      console.log(`Test con ID ${this.question.id} eliminado correctamente.`);
    })
    .catch((error) => {
      console.error('Error al eliminar el test:', error);
    });
  }
  
  public toShowQuestion(question : IQuestion){
    this.router.navigate([`/admin/test/${this.question.testId}/parts/${this.question.partId}/questions/${this.question.id}/`]);
  } 
}
