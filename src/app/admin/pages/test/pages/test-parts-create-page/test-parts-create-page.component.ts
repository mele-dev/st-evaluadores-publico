import { Component, inject } from '@angular/core';
import { PartServiceService } from '../../partService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPart } from '../../interfaces/IPart';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-create-page',
  templateUrl: './test-parts-create-page.component.html',
  styleUrls: ['./test-parts-create-page.component.css']
})
export class TestPartsCreatePageComponent implements OnInit {
  
  async ngOnInit(): Promise<void> {
    this.test = await this.testService.getDatos(this.testId);
  }

  @Input()
  public testId!: number;

  private partService: PartServiceService = inject(PartServiceService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private testService: TestServiceService = inject(TestServiceService);
  public test!: ITest;

  public async createPart(part: IPart) {
    if (!this.validatePart(part)) {
      console.log('Por favor, complete todos los campos');
      return;
    }

    try {
      await this.partService.postDatos(part);
      this.router.navigate([`./admin/test/${part.testId}/parts`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private validatePart(part: IPart): boolean {
    return !!part.name && !!part.description && part.timeLimit > 0;
  }
}
