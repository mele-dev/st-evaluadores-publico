import { Component, Input } from '@angular/core';
import { IPart} from '../../interfaces/IPart';
import { Router } from '@angular/router';
import { PartServiceService } from '../../partService.service';
import { ITest } from '../../interfaces/ITest';

@Component({
  selector: 'app-parts-list-item',
  templateUrl: './parts-list-item.component.html',
  styleUrl: './parts-list-item.component.css'
})
export class PartsListItemComponent {
  constructor(private router : Router,
    private partService: PartServiceService){
    }
  @Input() part!: IPart;
  @Input() test!: ITest;
  @Input() testId!: number;
  @Input() partId!: number;
  
  public toModifyPart(part : IPart){
    this.partService.getDatos(this.part.testId, this.part.id);
    this.router.navigate([`/admin/test/${this.part.testId}/parts/${this.part.id}/modify/`])  }
  
  public onDeletePart(part : IPart) {
    this.partService.deleateDatos(this.part)
    .then(() => {
      console.log(`Test con ID ${this.part.id} eliminado correctamente.`);
    })
    .catch((error) => {
      console.error('Error al eliminar el test:', error);
    });
  }
  
  public toShowPart(part : IPart){
    this.router.navigate([`/admin/test/${this.part.testId}/parts/${this.part.id}/`]);
  } 
}
