import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IQuestion } from './interfaces/IQuestion';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http : HttpClient) { }
  public getAllDatos(testId:number | undefined, partId:number | undefined) : Promise<IQuestion []> {
    return firstValueFrom(this.http.get<IQuestion []>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions`));
  }
  public postDatos(question : IQuestion)  : Promise<IQuestion>{
    return firstValueFrom(this.http.post<IQuestion>(`${environment.apiUrl}/admin/tests/${question.testId}/parts/${question.partId}/questions`, question));
  }
  public deleateDatos(question : IQuestion)  : Promise<IQuestion> {
    return firstValueFrom( this.http.delete<IQuestion>(`${environment.apiUrl}/admin/tests/${question.testId}/parts/${question.partId}/questions/${question.id}`));
  }
  public changeDatos(testId : number | undefined, partId: number | undefined, questionId: number, body: IQuestion) : Promise<IQuestion>{
    return firstValueFrom(this.http.put<IQuestion>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions/${questionId}`, body));
  }
  public getDatos(testId : number | undefined, partId: number | undefined, questionId: number): Promise<IQuestion> {
    return firstValueFrom(this.http.get<IQuestion>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions/${questionId}`));
  }
}