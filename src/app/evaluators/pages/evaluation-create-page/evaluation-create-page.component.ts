import { Component, OnInit, inject } from '@angular/core';
import { Test } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { GradeService } from '../../../admin/grades/services/grade.service';
import { Grade } from '../../../admin/grades/interfaces/grade.interface';
import { Router } from '@angular/router';
import { NotificationService } from '../../../shared/services/notification-service/notifications.service';
import { NotificationType } from '../../../shared/services/notification-service/Inotification';

@Component({
  selector: 'app-evaluation-create-page',
  templateUrl: './evaluation-create-page.component.html',
  styleUrl: './evaluation-create-page.component.css'
})
export class EvaluationCreatePageComponent implements OnInit {

  private router = inject(Router);
  private gradeService: GradeService = inject(GradeService);
  private evaluationService: EvaluationService = inject(EvaluationService);
  private notificationService: NotificationService = inject(NotificationService);

  public gradesList: Grade[] = [];
  public testList: Test[] = [];

  public async post(recievedEvaluation: any): Promise<void> {
    try {
      console.log("EVALUACION: ", JSON.stringify(recievedEvaluation));
      await this.evaluationService.createEvaluation(recievedEvaluation)
      this.router.navigate(["/evaluators"])
      this.notificationService.addNotification("La evaluación se ha creado con éxito!.", NotificationType.Success)
    } catch (error: any) {
      //FIXME: Mostrar mensaje de error
      this.notificationService.addNotification("Debe rellenar todos los campos.", NotificationType.Error)
    }
  }

  async ngOnInit(): Promise<void> {
    this.gradesList = await this.gradeService.getGrades();
    this.testList = await this.evaluationService.getTests();
  }

}
