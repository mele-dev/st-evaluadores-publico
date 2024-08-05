import { Component, Input, OnInit, EventEmitter, inject } from '@angular/core';
import { Evaluation, Test, TestPart } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';
import { GradeService } from '../../../admin/grades/services/grade.service';
import { Grade } from '../../../admin/grades/interfaces/grade.interface';
import { NotificationService } from '../../../shared/services/notification-service/notifications.service';
import { NotificationType } from '../../../shared/services/notification-service/Inotification';

@Component({
  selector: 'app-evaluation-modify-page',
  templateUrl: './evaluation-modify-page.component.html',
  styleUrl: './evaluation-modify-page.component.css'
})
export class EvaluationModifyPageComponent implements OnInit {

  private router = inject(Router);
  private gradeService: GradeService = inject(GradeService);
  private evaluationService: EvaluationService = inject(EvaluationService);
  private notificationService: NotificationService = inject(NotificationService);

  @Input()
  public id?: number;
  public evaluation?: Evaluation;
  public gradesList: Grade[] = [];
  public testList: Test[] = [];


  async ngOnInit(): Promise<void> {
    const myEvaluation = await this.evaluationService.getEvaluationById(this.id!);
    this.evaluation = myEvaluation;
    this.gradesList = await this.gradeService.getGrades();
    this.testList = await this.evaluationService.getTests();
  }

  public async put(recievedEvaluation: any): Promise<void> {
    if (!this.evaluation) {
      throw new Error("No existe evaluación.");
    }

    const updatedEvaluation: Evaluation = {
      ...this.evaluation!,
      ...recievedEvaluation
    }

    console.log({ updatedEvaluation });
    try {
      await this.evaluationService.updateEvaluation(this.id!, updatedEvaluation)
      this.router.navigate(["/evaluators"])
      this.notificationService.addNotification("La evaluación se ha actualizado exitosamente!.", NotificationType.Success)
    } catch (error: any) {
      //FIXME: Mostrar mensaje de error.
      this.notificationService.addNotification("No se ha podido modificar la evaluación. Verifique los campos y vuelva a intentarlo.", NotificationType.Error)
    }
  }

}

