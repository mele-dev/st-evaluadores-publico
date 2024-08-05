import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPart } from '../../interfaces/IPart';
import { ITest } from '../../interfaces/ITest';
import { Input } from '@angular/core';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionServiceService } from '../../questionService.service';
import { IOption } from '../../interfaces/IOption';
import { OptionServiceService } from '../../optionService.service';

@Component({
  selector: 'app-test-options-create-page',
  templateUrl: './test-options-create-page.component.html',
  styleUrl: './test-options-create-page.component.css'
})
export class TestOptionsCreatePageComponent {
  
  async ngOnInit(): Promise<void> {
    this.question = await this.questionService.getDatos(this.testId, this.partId, this.questionId);
  }
  
  @Input()
  public testId!: number;

  @Input()
  public partId!: number;

  @Input()
  public questionId!: number;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private questionService: QuestionServiceService = inject(QuestionServiceService);
  private optionService: OptionServiceService = inject(OptionServiceService);
  public test!: ITest;
  public part!: IPart;
  public question!: IQuestion;

  public async createOption(option : IOption) {
    try {
      await this.optionService.postDatos(option);
      this.router.navigate([`./admin/test/${this.test.id}/parts/${option.partId}/questions/${option.questionId}/options`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
