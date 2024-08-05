import { Component, inject } from '@angular/core';
import { DropdownService, item } from '../../../shared/services/dropdown-service/dropdown.service';
import { Observation } from '../../interfaces/evaluation.interface';

@Component({
  selector: 'app-student-results-page',
  templateUrl: './student-results-page.component.html',
  styleUrl: './student-results-page.component.css'
})
export class StudentResultsPageComponent {

  public tests: item[] = []

  private dropdownService: DropdownService = inject(DropdownService);

  async ngOnInit(): Promise<void> {
    this.dropdownService.addItem('Cuadro, A., Costa, D., Trías, D. y Ponce de León, P. (2009). Test de Eficacia Lectora (TECLE). Montevideo: Grupo Magro Editores.',
      'Esta técnica mide principalmente la precisión y velocidad en la decodificación (grafema-fonema). También se ven implicada la comprensión del significado de la oración y la administración de los recursos cognitivos del niño.')
    this.dropdownService.addItem('Cuadro, A., Palombo, A., Costa, D. y Von Hagen A. (2014). Test de Eficacia Ortográfica (TEO). Montevideo: Grupo Magro Editores.',
      'Esta técnica de cribado evalúa el nivel ortográfico de niños escolares.')
    this.dropdownService.addItem('Singer, S., Cuadro, A., Costa, D. y von Hagen, A. (2014). Test de Eficacia de Cálculo Aritmético (TECA). Montevideo: Grupo Magro Editores.',
      'Este test mide la velocidad de eficacia del cálculo aritmético.')
    this.tests = await this.dropdownService.getItemList();
  }

  cards: Observation[] = [
    {
      title: "Lectura",
      description: "XXX presenta un rendimiento en eficacia lectora correspondiente a un Percentil 25, lo cual se encuentra dentro de lo normal en comparación con su grado escolar. A nivel cualitativo se observa que el niño responde a todos los ítems de forma correcta con una velocidad media"
    },
    {
      title: "Escritura",
      description: "XXX presenta un rendimiento en eficacia ortográfica correspondiente a un Percentil 50, indicando un desempeño normal para su grado escolar en esta habilidad.",
    },
    {
      title: "Matemática",
      description: "XXX obtuvo un Percentil de 55 en la subprueba de Sumas y Restas y un Percentil de 50 en Multiplicaciones, indicando un nivel normal en el área de matemáticas."
    },
    {
      title: "Conclusiones",
      description: "En suma, XXX presenta un nivel Promedio en las áreas de lectura, escritura y matemáticas."
    }
  ]
}
