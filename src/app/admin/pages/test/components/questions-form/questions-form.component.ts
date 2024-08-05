import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionServiceService } from '../../questionService.service';
import { IQuestion } from '../../interfaces/IQuestion';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrl: './questions-form.component.css'
})
export class QuestionsFormComponent {
  constructor(private questionService: QuestionServiceService, private router: Router){}

  @Input()
  public partId?: number;

  @Input()
  public testId?: number;

  @Input()
  public question : IQuestion = {
    id:0,
    number : 0,
    description : "",
    testId : 0,
    partId : 0,
    isExample : false,
  }

  @Output()
  public onSubmitQuestion: EventEmitter<IQuestion> = new EventEmitter<IQuestion>();

  public number: number = 0;
  public description: string = '';

  ngOnInit(): void {
    if (!this.testId) {throw new Error('Test id is required')};
    this.number = this.question.number;
    this.description = this.question.description;
  }

  public onSubmit(){
    const newpart: IQuestion = {
      id: this.question.id,
      number: this.number,
      description: this.description,
      testId: this.testId!,
      partId: this.partId!,
      isExample: this.question.isExample,
    }
    this.onSubmitQuestion.emit(newpart)
    console.log(newpart)
  }
}
