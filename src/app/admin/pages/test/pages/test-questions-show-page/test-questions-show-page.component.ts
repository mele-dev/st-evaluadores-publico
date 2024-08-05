import { Component } from '@angular/core';
import { IPart } from '../../interfaces/IPart';
import { PartServiceService } from '../../partService.service';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { ActivatedRoute, } from '@angular/router';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionServiceService } from '../../questionService.service';
import { IOption } from '../../interfaces/IOption';
import { OptionServiceService } from '../../optionService.service';

@Component({
  selector: 'app-test-questions-show-page',
  templateUrl: './test-questions-show-page.component.html',
  styleUrl: './test-questions-show-page.component.css'
})
export class TestQuestionsShowPageComponent {
  public question!: IQuestion;
  public part!: IPart;
  public test!: ITest;
  public optionList!: IOption[];
  
  
  public constructor(private optionservice : OptionServiceService,
    private questionservice : QuestionServiceService,
    private testService : TestServiceService,
    private partservice : PartServiceService,
    private route : ActivatedRoute){}
    

  ngOnInit(){
    const testId: number = +this.route.snapshot.paramMap.get('testId')!;
    const partId: number = +this.route.snapshot.paramMap.get('partId')!;
    const questionId: number = +this.route.snapshot.paramMap.get('questionId')!;
    console.log(this.optionservice.getAllDatos(testId, partId, questionId))
    this.optionservice.getAllDatos(testId, partId, questionId).then(
      options => this.optionList = options
    )
  }
}
