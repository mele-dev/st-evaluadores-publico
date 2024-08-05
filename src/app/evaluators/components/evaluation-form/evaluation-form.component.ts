import { Component, OnInit, Input, EventEmitter, Output, inject } from '@angular/core';
import { Grade } from '../../../admin/grades/interfaces/grade.interface';
import { Test, EvaluationPost, TestPart } from "../../interfaces/evaluation.interface";
import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrl: './evaluation-form.component.css'
})
export class EvaluationFormComponent {

  @Input()
  public gradesList: Grade[] = [];

  @Input()
  public testList: Test[] = [];

  @Input()
  public evaluation: EvaluationPost = {
    description: '',
    institution: '',
    date: new Date(),
    userId: 0,
    gradeIds: [],
    tests: [],
    reason: ''
  };

  minDate = new Date().toISOString().slice(0, 16);

  public selectedDateInput = this.evaluation.date.toISOString();
  public selectedDate = this.selectedDateInput.slice(0, 16);


  @Output()
  public onEvaluationEmitted: EventEmitter<EvaluationPost> = new EventEmitter<EvaluationPost>();

  public onSubmit() {
    this.evaluation.date = new Date(this.selectedDate);
    this.onEvaluationEmitted.emit(this.evaluation);
  }

  public isTestSelected(id: number): boolean {
    const test = this.evaluation.tests.find(t => t.id === id);
    return !!test;
  }

  public isPartSelected(testId: number, partId: number): boolean {
    const test = this.evaluation.tests.find(t => t.id == testId);
    const part = test?.parts.find(p => p.id == partId);
    return !!part;
  }

  onChangesGrade(event: any, gradeId: number) {
    if (event.target.checked) { //SI está chequeado... podríamos chequear antes que no esté aún.
      this.evaluation.gradeIds.push(gradeId);
    } else {  //Si no está chequeado...
      this.evaluation.gradeIds = this.evaluation.gradeIds.filter(id => id !== gradeId);
    }
    console.log(this.evaluation.gradeIds);
  }

  onChangesTests(event: any, test: Test) {
    console.log(JSON.stringify(this.evaluation));
    if (event.target.checked) { //SI está chequeado... podríamos chequear antes que no esté aún.
      if (this.isTestSelected(test.id)) {
        console.log("Ya está agregado el testId: ", test.id);
        return;
      }
      this.evaluation.tests.push(structuredClone(test));
    } else {  //Si no está chequeado...
      this.evaluation.tests = this.evaluation.tests.filter(t => t.id !== test.id);
    }
    console.log("SELECTED TESTS: ", this.evaluation.tests);
  }

  onChangesTestsParts(event: any, part: TestPart, test: Test) {
    console.log(JSON.stringify(this.evaluation.tests));
    const myTest = this.evaluation.tests.find(t => t.id === test.id)
    if (!myTest) {
      return;
    }
    if (event.target.checked) { //SI está chequeado... podríamos chequear antes que no esté aún.
      if (!this.isPartSelected(test.id, part.id)) {
        myTest?.parts.push(structuredClone(part))
      }
      else { return; }
    }
    else {
      myTest.parts = myTest?.parts.filter(p => p.id !== part.id);
    }
  }
}


