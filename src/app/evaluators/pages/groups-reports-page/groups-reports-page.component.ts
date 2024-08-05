import { Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, inject } from '@angular/core'
import { Evaluation, GradeReport, GradeTestReport, Observation } from '../../interfaces/evaluation.interface'
import { ObservationService } from '../../services/observation.service'
import { UsersService } from '../../../auth/users.service'
import { User } from '../../../auth/User'
import { EvaluationService } from '../../services/evaluation.service'

@Component({
  selector: 'app-groups-reports-page',
  templateUrl: './groups-reports-page.component.html',
  styleUrl: './groups-reports-page.component.css'
})
export class GroupsReportsPageComponent {

  @Input()
  public evaluation?: Evaluation

  @Input()
  public id?: number

  private evaluationService: EvaluationService = inject(EvaluationService);

  @Output()
  public evaluationEmitter: EventEmitter<Evaluation> = new EventEmitter<Evaluation>();

  generals: Observation[] = [
    {
      title: "Observaciones:",
      description: "Se observan conductas de Impulsividad y debilidades atencionales en los niños XXX y XXX. Cabe destacar que este último tiene diagnosticado Trastorno de Déficit Atencional con Hiperactividad."
    },
    {
      title: "Conclusiones:",
      description: "Los resultados de las pruebas de cribado evidencian dos niños en nivel riesgo en ambas áreas evaluadas (XXX y XXX). Una niña se encuentra en el límite entre los niveles riesgo y promedio, aspecto que también debe ser tomado en consideración (XXX).",
    }
  ]

  tests: GradeTestReport[] = []


  private observationService: ObservationService = inject(ObservationService);
  private usersService: UsersService = inject(UsersService);

  user!: User;

  public gradeReport: GradeReport = {
    testId: 0,
    userName: "",
    evaluationId: 0,
    evaluationDescription: "",
    evaluationInsitution: "",
    evaluationDate: "",
    evaluationMotivo: "",
    gradeId: 0,
    gradeName: "",
    gradeComments: "",
    statusName: "",
    tests: []
  }

  async ngOnInit(): Promise<void> {
    const myEvaluation = await this.evaluationService.getEvaluationById(this.id!);
    this.evaluation = myEvaluation;
    this.gradeReport = await this.observationService.getEvaluationObservationsByGroup(this.evaluation!.id, this.evaluation!.gradeIds[0]);
    this.getTests();
  }

  public getTests() {
    this.tests = this.gradeReport.tests
  }

  public reciveEvaluation(evaluation: Evaluation) {
    this.evaluation = evaluation;
    console.log("llego al recieve evaluation")
  }
}