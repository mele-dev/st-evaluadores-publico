import { Component, Input } from '@angular/core';
import { ITest } from '../../interfaces/ITest';
import { Router } from '@angular/router';
import { TestServiceService } from '../../testService.service';

@Component({
  selector: 'app-test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrl: './test-list-item.component.css'
})

export class TestListItemComponent {
  constructor(private router : Router,
    private testService: TestServiceService){
  }
  @Input() test!: ITest;
  public toModifyTest(testId : number){
    this.router.navigate([`/admin/test/${testId}/modify/`])  }
  
  public onDeleteTest(testId: number) {
    
    this.testService.deleateDatos(testId)
    .then(() => {
      console.log(`Test con ID ${testId} eliminado correctamente.`);
    })
    .catch((error) => {
      console.error('Error al eliminar el test:', error);
    });
  }
  
  public toShowTest(testId: number){
    this.testService.getDatos(testId)
    this.router.navigate([`/admin/test/${testId}/parts/`])
  } 
}
