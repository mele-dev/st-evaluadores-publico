import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OptionServiceService } from '../../optionService.service';
import { IOption } from '../../interfaces/IOption';

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrl: './options-form.component.css'
})
export class OptionsFormComponent {
  constructor(private optionService: OptionServiceService, private router: Router,
    private route: ActivatedRoute
    ){}

  @Input()
  public testId?: number;

  @Input()
  public partId?: number;

  @Input()
  public questionId?: number;

  @Input()
  public option : IOption = {
    id:0,
    letter : "",
    name : "",
    testId : 0,
    partId : 0,
    questionId : 0,
    correct : false,
  }

  @Output()
  public onSubmitOption: EventEmitter<IOption> = new EventEmitter<IOption>();

  public name: string = '';
  public letter : string = '';
  public correct: boolean = false;

  ngOnInit(): void {
    if (!this.testId) throw new Error('Test id is required');
    this.name = this.option.name;
    this.letter = this.option.letter;
    this.correct = this.option.correct;
  }

  public onSubmit(){
    const newoption: IOption = {
      id: this.option.id,
      name: this.name,
      letter: this.letter,
      correct: this.correct,
      testId: this.testId!,
      partId: this.partId!,
      questionId: this.questionId!,
    }
    console.log("newop", newoption)
    this.onSubmitOption.emit(newoption)
  }
}

