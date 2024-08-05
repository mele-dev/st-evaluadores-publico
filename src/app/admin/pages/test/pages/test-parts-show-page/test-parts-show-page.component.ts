import { Component, Input } from '@angular/core';
import { IPart } from '../../interfaces/IPart';
import { PartServiceService } from '../../partService.service';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { ActivatedRoute, } from '@angular/router';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionServiceService } from '../../questionService.service';

@Component({
  selector: 'app-test-parts-show-page',
  templateUrl: './test-parts-show-page.component.html',
  styleUrl: './test-parts-show-page.component.css'
})
export class TestPartsShowPageComponent { 

  @Input()
  public testId?: number;
  
  @Input()
  public partId?: number;

  public questionList!: IQuestion[];
  public part!: IPart;
  public test!: ITest;
  
  
  public constructor(private questionservice : QuestionServiceService,
    private testService : TestServiceService,
    private partservice : PartServiceService,
    private route : ActivatedRoute){}
    

  ngOnInit(){
    console.log(this.questionservice.getAllDatos(this.testId, this.partId))
    this.questionservice.getAllDatos(this.testId, this.partId).then(
      question => this.questionList = question
    )
  }
}