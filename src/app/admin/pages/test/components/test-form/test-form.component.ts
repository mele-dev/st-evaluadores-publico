import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TestServiceService } from '../../testService.service';
import { NgForm } from '@angular/forms';
import { ITest } from '../../interfaces/ITest';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css'
})

export class TestFormComponent implements OnInit {
  constructor(private testService: TestServiceService, private router: Router) { }
  @Input()
  public test: ITest = {
    id: 0,
    name: "",
    initials: "",
    description: "",
    referencias: []
  };

  @Output()
  public onSubmitTest: EventEmitter<ITest> = new EventEmitter<ITest>();

  public id: number = 0;
  public name: string = '';
  public description: string = '';
  public initials: string = '';
  public referencias: Array<string> = [];
  public referenciasCajitas: string = '';

  ngOnInit(): void {
    // this.id = this.test.id;
    this.name = this.test.name;
    this.description = this.test.description;
    this.initials = this.test.initials;
    this.referencias = this.test.referencias;
    this.referenciasCajitas = this.test.referencias.join();
  };

  public onSubmit() {
    const newTest = structuredClone(this.test);
    // this.id = this.test.id
    newTest.name = this.name;
    newTest.description = this.description;
    newTest.initials = this.initials;
    newTest.referencias = this.referenciasCajitas.split(';');
    if (newTest.name == '') {
      alert('El campo nombre no puede estar vacío');
      return;
    }
    else if (newTest.initials == '') {
      alert('El campo iniciales no puede estar vacío');
      return;
    }
    else if (newTest.description == '') {
      alert('El campo descripción no puede estar vacío');
      return;
    }
    else if (newTest.referencias[0] == '') {
      alert('El campo referencias no puede estar vacío');
      return;
    }
    this.onSubmitTest.emit(newTest);
    console.log(newTest);
  };
};
