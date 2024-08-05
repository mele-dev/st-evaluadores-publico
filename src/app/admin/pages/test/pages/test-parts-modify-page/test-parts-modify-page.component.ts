import { IPart } from '../../interfaces/IPart';
import { Component, Input, inject } from '@angular/core';
import { PartServiceService } from '../../partService.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parts-modify-page',
  templateUrl: './test-parts-modify-page.component.html',
  styleUrls: ['./test-parts-modify-page.component.css']
})
export class TestPartsModifyPageComponent {

  @Input() 
  public testId?: number;

  public part!: IPart;

  private partService: PartServiceService = inject(PartServiceService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  async ngOnInit(): Promise<void> {
    if (!this.testId) {
      throw new Error('No hay ID en la ruta');
    }
    this.testId = this.route.snapshot.params['partId'];
    this.part = await this.partService.getDatos(this.route.snapshot.params['testId'], this.route.snapshot.params['partId']);
  }

  public async modifyPart(part: IPart) {
    if (!this.validatePart(part)) {
      console.log('Por favor, complete todos los campos');
      return;
    }

    try {
      await this.partService.changeDatos(this.part.testId, this.part.id, part);
      this.router.navigate([`admin/test/${this.part.testId}/parts/`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async onModifyPart(part: IPart) {
    try {
      await this.modifyPart(part);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private validatePart(part: IPart): boolean {
    return !!part.name && !!part.description && part.timeLimit > 0;
  }
}
