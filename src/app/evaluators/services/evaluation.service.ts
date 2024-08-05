import { Injectable } from '@angular/core';
import { Evaluation, EvaluationPost, EvaluationTest, Part, Question, StudentEvaluation, Test } from '../interfaces/evaluation.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private url = environment.apiUrl + "/evaluators";

  constructor(private Http: HttpClient) { }

  public async getEvaluations(): Promise<Evaluation[]> {
    return firstValueFrom(this.Http.get<Evaluation[]>(this.url + "/evaluations"));
  }

  public async getEvaluationById(id: number): Promise<Evaluation> {
    return firstValueFrom(this.Http.get<Evaluation>(this.url + `/evaluations/${id}`));
  }

  public async createEvaluation(evaluacion: EvaluationPost): Promise<Evaluation> {
    return firstValueFrom(this.Http.post<Evaluation>(this.url + "/evaluations", evaluacion))
  }

  public async updateEvaluation(id: number, evaluacion: Evaluation): Promise<Evaluation> {
    return firstValueFrom(this.Http.put<Evaluation>(this.url + `/evaluations/${id}`, evaluacion))
  }

  public async updateEvaluationStatusToWaiting(id: number): Promise<Evaluation> {
    return firstValueFrom(this.Http.put<Evaluation>(this.url + `/evaluations/${id}/toWaiting`, `{"id": "${id}"}`))
  }

  public async updateEvaluationStatusToEnabled(id: number): Promise<Evaluation> {
    return firstValueFrom(this.Http.put<Evaluation>(this.url + `/evaluations/${id}/toEnabled`, `{"id": "${id}"}`))
  }

  public async updateEvaluationStatusToFinished(id: number): Promise<Evaluation> {
    return firstValueFrom(this.Http.put<Evaluation>(this.url + `/evaluations/${id}/toFinished`, `{"id": "${id}"}`))
  }

  public async deleteEvaluation(id: number): Promise<Evaluation> {
    return firstValueFrom(this.Http.delete<Evaluation>(this.url + `/evaluations/${id}`))
  }

  public async getTests(): Promise<Test[]> {
    return firstValueFrom(this.Http.get<Test[]>(this.url + `/tests`))
  }

  public async getEvaluationTests(id: number): Promise<EvaluationTest[]> {
    return firstValueFrom(this.Http.get<EvaluationTest[]>(this.url + `/evaluations/${id}/test`))
  }

  public async startTest(evaluationId: number, evaluationTestId: number): Promise<Part[]> {
    return firstValueFrom(this.Http.put<Part[]>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}`, `{"id": "${evaluationTestId}"}`))
  }

  public async getEvaluationTestParts(evaluationId: number, evaluationTestId: number): Promise<Part[]> {
    return firstValueFrom(this.Http.get<Part[]>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}`))
  }

  public async explainPart(evaluationId: number, evaluationTestId: number, evaluationTestPartId: number): Promise<Part[]> {
    return firstValueFrom(this.Http.put<Part[]>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}/parts/${evaluationTestPartId}`, `{"id": "${evaluationTestPartId}"}`))
  }

  public async startPart(evaluationId: number, evaluationTestId: number, evaluationTestPartId: number): Promise<any> {
    return firstValueFrom(this.Http.put<any>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}/parts/${evaluationTestPartId}/start`, `{"id": "${evaluationTestPartId}"}`))
  }

  public async getEvaluationTestPartById(evaluationId: number, evaluationTestId: number, evaluationTestPartId: number): Promise<Part> {
    return firstValueFrom(this.Http.get<Part>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}/parts/${evaluationTestPartId}`))
  }

  public async getStudentsInEvaluation(evaluationId: number): Promise<StudentEvaluation[]> {
    return firstValueFrom(this.Http.get<StudentEvaluation[]>(this.url + `/evaluations/${evaluationId}/connection`))
  }

  public async getPartExampleQuestions(evaluationId: number, evaluationTestId: number, evaluationTestPartId: number): Promise<Question[]> {
    return firstValueFrom(this.Http.get<Question[]>(this.url + `/evaluations/${evaluationId}/test/${evaluationTestId}/parts/${evaluationTestPartId}/explain`))
  }
}
