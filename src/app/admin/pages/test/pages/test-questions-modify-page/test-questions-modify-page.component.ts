import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionServiceService } from '../../questionService.service';

@Component({
  selector: 'app-questions-modify-page',
  templateUrl: './test-questions-modify-page.component.html',
  styleUrl: './test-questions-modify-page.component.css'
})
export class TestQuestionsModifyPageComponent {

  @Input() 
  public partId?: number;

  @Input()
  public testId?: number;

  @Input()
  public questionId!: number;

  public question!: IQuestion;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private questionService: QuestionServiceService = inject(QuestionServiceService);

  async ngOnInit(): Promise<void> {
    if (!this.questionId) {
      throw new Error('No hay ID en la ruta');
    }
    if (!this.partId) {
      throw new Error('No hay ID en la ruta');
    }
    if (!this.testId) {
      throw new Error('No hay ID en la ruta');
    }
    this.questionId = this.route.snapshot.params['questionId'];
    this.partId = this.route.snapshot.params['partId'];
    this.testId = this.route.snapshot.params['testId'];
    this.question = await this.questionService.getDatos(this.route.snapshot.params['testId'], this.route.snapshot.params['partId'], this.route.snapshot.params['questionId']);
    console.log('id ruta = ' + this.question.id);
  }

  public async modifyQuestion(question: IQuestion) {
    try {
      question.testId = this.testId;
      await this.questionService.changeDatos(question.testId, this.question.partId, this.question.id, question);
      this.router.navigate([`admin/test/${this.testId}/parts/${this.question.partId}/questions`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async onModifyQuestion(question: IQuestion) {
    try {
      console.log('id ruta = ' + this.question.id);
      question.testId = this.testId;
      await this.modifyQuestion(question);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
