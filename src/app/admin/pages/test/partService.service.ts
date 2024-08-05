import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPart } from './interfaces/IPart';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PartServiceService {

  constructor(private http : HttpClient) { }
  public getAllDatos(testId:number) : Promise<IPart []> {
    return firstValueFrom(this.http.get<IPart []>(`${environment.apiUrl}/admin/tests/${testId}/parts`));
  }
  public postDatos(part : IPart)  : Promise<IPart>{
    return firstValueFrom(this.http.post<IPart>(`${environment.apiUrl}/admin/tests/${part.testId}/parts`, part));
  }
  public deleateDatos(part : IPart)  : Promise<IPart> {
    return firstValueFrom( this.http.delete<IPart>(`${environment.apiUrl}/admin/tests/${part.testId}/parts/${part.id}`));
  }
  public changeDatos(testId : number, partId: number, body: IPart) : Promise<IPart>{
    return firstValueFrom(this.http.put<IPart>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}`, body));
  }
  public getDatos(testId : number, partId: number): Promise<IPart> {
    return firstValueFrom(this.http.get<IPart>(`${environment.apiUrl}/admin/tests/${testId}/parts/${partId}`));
  }
}