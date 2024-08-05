import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IOption } from './interfaces/IOption';
@Injectable({
  providedIn: 'root'
})
export class OptionServiceService {

  constructor(private http : HttpClient) { }
  public getAllDatos(testId:number, partId:number, questionId:number) : Promise<IOption []> {
    return firstValueFrom(this.http.get<IOption []>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions/${questionId}/options`));
  }
  public postDatos(option : IOption)  : Promise<IOption>{
    return firstValueFrom(this.http.post<IOption>(`${environment.apiUrl}/admin/tests/${option.testId}/parts/${option.partId}/questions/${option.questionId}/options`, option));
  }
  public deleateDatos(option : IOption)  : Promise<IOption> {
    return firstValueFrom( this.http.delete<IOption>(`${environment.apiUrl}/admin/tests/${option.testId}/parts/${option.partId}/questions/${option.questionId}/options/${option.id}`));
  }
  public changeDatos(testId : number, partId: number, questionId: number, optionId:number, body: IOption) : Promise<IOption>{
    return firstValueFrom(this.http.put<IOption>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions/${questionId}/options/${optionId}`, body));
  }
  public getDatos(testId : number, partId: number, questionId: number, optionId:number): Promise<IOption> {
    return firstValueFrom(this.http.get<IOption>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}/questions/${questionId}/options/${optionId}`));
  }
}