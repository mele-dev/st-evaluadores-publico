import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IOption } from '../../interfaces/IOption';
import { OptionServiceService } from '../../optionService.service';

@Component({
  selector: 'app-test-options-modify-page',
  templateUrl: './test-options-modify-page.component.html',
  styleUrl: './test-options-modify-page.component.css'
})
export class TestOptionsModifyPageComponent {

  @Input() 
  public partId?: number;

  @Input()
  public testId?: number;

  @Input()
  public questionId!: number;

  @Input()
  public optionId!: number;

  public option!: IOption;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private optionService: OptionServiceService = inject(OptionServiceService);

  async ngOnInit(): Promise<void> {
    if (!this.optionId) {
      throw new Error('No hay ID en la ruta');
    }
    if (!this.questionId) {
      throw new Error('No hay ID en la ruta');
    }
    if (!this.partId) {
      throw new Error('No hay ID en la ruta');
    }
    if (!this.testId) {
      throw new Error('No hay ID en la ruta');
    }
    this.optionId = this.route.snapshot.params['optionId'];
    this.questionId = this.route.snapshot.params['questionId'];
    this.partId = this.route.snapshot.params['partId'];
    this.testId = this.route.snapshot.params['testId'];
    this.option = await this.optionService.getDatos(this.route.snapshot.params['testId'], this.route.snapshot.params['partId'], this.route.snapshot.params['questionId'], this.route.snapshot.params['optionId']);
    console.log('id ruta = ' + this.option.id);
  }

  public async modifyOption(option: IOption) {
    try {
      await this.optionService.changeDatos(this.option.testId, this.option.partId, this.option.questionId, this.option.id, option);
      this.router.navigate([`admin/test/${this.option.testId}/parts/${this.option.partId}/questions`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async onModifyOption(option: IOption) {
    try {
      console.log('id ruta = ' + this.option.id);
      await this.modifyOption(option);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
