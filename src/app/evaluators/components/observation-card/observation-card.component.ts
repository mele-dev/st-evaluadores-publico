import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-observation-card',
  templateUrl: './observation-card.component.html',
  styleUrl: './observation-card.component.css'
})
export class ObservationCardComponent {
  title = '';
  description = '';

  @Input()
  public card = {
    title: this.title,
    description: this.description
  }
}
