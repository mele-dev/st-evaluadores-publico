import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-student-observation-page',
  templateUrl: './student-observation-page.component.html',
  styleUrl: './student-observation-page.component.css',
})
export class StudentObservationPageComponent {
  title = 'angular';
  public Editor = ClassicEditor;

  public model = {
    editorData: '<p>Hola, perdiste, no te pongas triste :) </p>',
  };
}
