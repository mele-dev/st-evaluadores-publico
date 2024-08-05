import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITest } from './interfaces/ITest';
import { first, firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http : HttpClient) { }
  public getAllDatos() : Promise<ITest []> {
  
    return firstValueFrom(this.http.get<ITest []>(`${environment.apiUrl}/admin/tests`));
  }
  public postDatos(test : ITest)  : Promise<ITest>{
  
    return firstValueFrom(this.http.post<ITest>(`${environment.apiUrl}/admin/tests`, test));
  }
  public deleateDatos(id : number)  : Promise<ITest> {
  
    return firstValueFrom( this.http.delete<ITest>(`${environment.apiUrl}/admin/tests/${id}`));
  }
  public changeDatos(id : number, body : ITest) : Promise<ITest>{
  
    return firstValueFrom(this.http.put<ITest>(`${environment.apiUrl}/admin/tests/${id}`, body));
  }
  public getDatos(id : number): Promise<ITest> {
  
    return firstValueFrom(this.http.get<ITest>(`${environment.apiUrl}/admin/tests/${id}`));
  }
}
