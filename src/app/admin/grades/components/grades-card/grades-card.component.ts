import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Grade } from '../../interfaces/grade.interface';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrl: './grades-card.component.css'
})
export class GradesCardComponent {

  public id: number = 0;

  @Input()
  public grade?: Grade;

  @Output()
  public deleteEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (!this.grade) throw new Error(`Se debe especificar un grado.`)
    this.id = this.grade.id;
  }

  public deleteGrade(id: number) {
    this.deleteEmitter.emit(id);
  }
}
