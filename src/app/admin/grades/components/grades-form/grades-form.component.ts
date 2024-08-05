import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Grade } from '../../interfaces/grade.interface';
import { GradeService } from '../../services/grade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrl: './grades-form.component.css'
})
export class GradesFormComponent implements OnInit {

  @Input()
  public grade: Grade = {
    id: 0,
    name: ''
  }

  @Output()
  public onGrade: EventEmitter<Grade> = new EventEmitter<Grade>();

  public id: number = 0;
  public name: string = '';

  ngOnInit(): void {
    this.id = this.grade.id;
    this.name = this.grade.name;
  }

  public onSubmit() {
    const newEval = structuredClone(this.grade);
    newEval.id = this.id;
    newEval.name = this.name;
    this.onGrade.emit(newEval);
  }
}
