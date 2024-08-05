import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation.interface';
import { EvaluationService } from '../../services/evaluation.service';
import { CardModalComponent } from '../../../shared/components/card-modal/card-modal.component';
import { NotificationService } from '../../../shared/services/notification-service/notifications.service';
import { NotificationType } from '../../../shared/services/notification-service/Inotification';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
})
export class EvaluationListComponent implements OnInit {

  private evaluationService: EvaluationService = inject(EvaluationService);
  private deletingEvaluation?: Evaluation;
  private notificationService: NotificationService = inject(NotificationService);

  public evaluationsList: Evaluation[] = [];
  public evaluacionEmitida?: Evaluation;
  @ViewChild('deleteModal') deleteModal!: CardModalComponent;

  async ngOnInit(): Promise<void> {
    this.evaluationsList = await this.evaluationService.getEvaluations();
  }

  public reciveDelete(evaluation: Evaluation): void {
    console.log("llego")
    this.deletingEvaluation = evaluation;
    this.deleteModal.open();
  }

  public async confirmarDelete() {
    console.log("DELETING", this.deletingEvaluation);
    console.log("FALTA PEGARLE AL BACKEND");
    this.deleteModal.close();
    try {
      if (!this.deletingEvaluation) throw new Error("No se detectó la evaluación seleccionada para borrar.");
      await this.evaluationService.deleteEvaluation(this.deletingEvaluation?.id);
      this.deletingEvaluation = undefined;
      this.evaluationsList = await this.evaluationService.getEvaluations();
      this.notificationService.addNotification("Evaluación eliminada correctamente.", NotificationType.Success)
    } catch (error: any) {
      this.notificationService.addNotification("No se detectó la evaluación seleccionada para borrar.", NotificationType.Error)
    }
  }
}
