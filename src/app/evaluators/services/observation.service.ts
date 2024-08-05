import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Grade } from '../../admin/grades/interfaces/grade.interface';
import { GradeReport } from '../interfaces/evaluation.interface';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private url = environment.apiUrl + "/evaluators/evaluations/";
  
  constructor(private Http: HttpClient) { }

  // Obtener los grados de una evaluación
  public async getEvaluationGrades(evaluationId: number): Promise<Grade[]> {
    return await firstValueFrom(this.Http.get<Grade[]>(this.url + `${evaluationId}/grades`));
  }

  // Obtener los reportes de una evaluación y todos sus grados
  public async getEvaluationObservations(evaluationId: number): Promise<GradeReport[]> {
    return await firstValueFrom(this.Http.get<GradeReport[]>(this.url + `${evaluationId}/grades/reports`));
  }

  // Obtener los reportes de una evaluación y un solo grupo
  public async getEvaluationObservationsByGroup(evaluationId: number, groupId: number): Promise<GradeReport>{
    return await firstValueFrom(this.Http.get<GradeReport>(this.url + `${evaluationId}/grades/${groupId}/reports`));
  }
}
