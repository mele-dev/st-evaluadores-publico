import { Component, inject } from '@angular/core';
import { TestServiceService } from '../../testService.service';
import { Router } from '@angular/router';
import { ITest } from '../../interfaces/ITest';

@Component({
  selector: 'app-test-create-page',
  templateUrl: './test-create-page.component.html',
  styleUrl: './test-create-page.component.css'
})
export class TestCreatePageComponent {
  private testService: TestServiceService = inject(TestServiceService);
  private router: Router = inject(Router);

  public async createTest(test: ITest) {
    try {
      await this.testService.postDatos(test);
      this.router.navigate([`admin/test`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
