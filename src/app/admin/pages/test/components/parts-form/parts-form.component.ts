import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PartServiceService } from '../../partService.service';
import { IPart } from '../../interfaces/IPart';

@Component({
  selector: 'app-parts-form',
  templateUrl: './parts-form.component.html',
  styleUrls: ['./parts-form.component.css']
})
export class PartsFormComponent {
  constructor(private partService: PartServiceService, private router: Router){}

  @Input()
  public testId?: number;

  @Input()
  public part: IPart = {
    id: 0,
    name: '',
    description: '',
    exampleDescription: '',
    testId: 0,
    timeLimit: 1,
  };

  @Output()
  public onSubmitPart: EventEmitter<IPart> = new EventEmitter<IPart>();

  public name: string = '';
  public description: string = '';
  public timeLimit: number = 1;

  ngOnInit(): void {
    if (!this.testId) throw new Error('Test id is required');
    this.name = this.part.name;
    this.description = this.part.description;
    this.timeLimit = this.part.timeLimit;
  }

  public onSubmit() {
    if (!this.validateForm()) {
      console.log('Por favor, complete todos los campos');
      return;
    }

    const newpart: IPart = {
      id: this.part.id,
      name: this.name,
      description: this.description,
      exampleDescription: this.part.exampleDescription,
      testId: this.testId!,
      timeLimit: this.timeLimit,
    };
    this.onSubmitPart.emit(newpart);
  }

  private validateForm(): boolean {
    return !!this.name && !!this.description && this.timeLimit > 0;
  }
}
