import { Component, Input } from '@angular/core';
import { IPart} from '../../interfaces/IPart';
import { Router } from '@angular/router';
import { OptionServiceService } from '../../optionService.service';
import { ITest } from '../../interfaces/ITest';
import { IQuestion } from '../../interfaces/IQuestion';
import { IOption } from '../../interfaces/IOption';

@Component({
  selector: 'app-options-list-item',
  templateUrl: './options-list-item.component.html',
  styleUrl: './options-list-item.component.css'
})
export class OptionsListItemComponent {
  constructor(private router : Router,
    private optionService: OptionServiceService){
    }
  @Input() part!: IPart;
  @Input() test!: ITest;
  @Input() question!: IQuestion;
  @Input() option!: IOption;
  
  public toModifyOption(question : IOption){
    this.optionService.getDatos(this.option.testId, this.option.partId, this.option.questionId, this.option.id);
    this.router.navigate([`/admin/test/${this.option.testId}/parts/${this.option.partId}/question/${this.option.questionId}/options/${this.option.id}/modify/`])  }
  
  public onDeleteOption(option : IOption) {
    
    this.optionService.deleateDatos(this.option)
    .then(() => {
      console.log(`Opcion con ID ${this.option.id} eliminado correctamente.`);
    })
    .catch((error) => {
      console.error('Error al eliminar el opcion:', error);
    });
  }
  
  public toShowOption(option : IOption){
    this.router.navigate([`/admin/test/${this.option.testId}/parts/${this.option.partId}/questions/${this.option.id}/`]);
  } 
}
