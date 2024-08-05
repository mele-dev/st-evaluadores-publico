import { Component, inject } from '@angular/core';
import { PartServiceService } from '../../partService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPart } from '../../interfaces/IPart';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { Input, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionServiceService } from '../../questionService.service';

@Component({
  selector: 'app-test-questions-create-page',
  templateUrl: './test-questions-create-page.component.html',
  styleUrl: './test-questions-create-page.component.css'
})
export class TestQuestionsCreatePageComponent implements OnInit {
  
  async ngOnInit(): Promise<void> {
    this.part = await this.partService.getDatos(this.testId, this.partId);
  }
  
  @Input()
  public testId!: number;

  @Input()
  public partId!: number;

  private partService: PartServiceService = inject(PartServiceService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private testService: TestServiceService = inject(TestServiceService);
  private questionService: QuestionServiceService = inject(QuestionServiceService);
  public test!: ITest;
  public part!: IPart;

  public async createQuestion(question : IQuestion) {
    try {
      await this.questionService.postDatos(question);
      this.router.navigate([`./admin/test/${question.testId}/parts/${question.partId}/questions`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}