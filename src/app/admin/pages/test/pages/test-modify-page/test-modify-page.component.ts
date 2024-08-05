import { Component, Input, inject } from '@angular/core';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-modify-page',
  templateUrl: './test-modify-page.component.html',
  styleUrl: './test-modify-page.component.css'
})

export class TestModifyPageComponent {

  public test?: ITest;

  @Input()
  testId?: number;

  private testService: TestServiceService = inject(TestServiceService);
  private router: Router = inject(Router);

  async ngOnInit(): Promise<void> {
    if (!this.testId) {
      throw new Error('No hay ID en la ruta');
    }
    console.log('id ruta = ' + this.testId);
    this.test = await this.testService.getDatos(this.testId);
  }

  public async modifyTest(id: number, test: ITest) {
    try {
      await this.testService.changeDatos(id, test);
      this.router.navigate([`admin/test`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async onModifyTest(test: ITest) {
    try {
      await this.modifyTest(test.id, test);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
