import { Injectable, inject } from '@angular/core';
import { Grade } from '../interfaces/grade.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

    private httpClient: HttpClient = inject(HttpClient);

    public async getGrades(): Promise<Grade[]> {
        return firstValueFrom(this.httpClient.get<Grade[]>(environment.apiUrl + `/admin/grades`));
    }

    public async deleteGrade(id: number): Promise<Grade> {
        return firstValueFrom(this.httpClient.delete<Grade>(environment.apiUrl + `/admin/grades/${id}`))
    }

    public async modifyGrade(id: number, grade: any): Promise<Grade> {
        return firstValueFrom(this.httpClient.put<Grade>(environment.apiUrl + `/admin/grades/${id}`, grade))
    }

    public async createGrade(grade: any): Promise<Grade> {
        return firstValueFrom(this.httpClient.post<Grade>(environment.apiUrl + `/admin/grades`, grade));
    }

    public async getGradeById(id: number): Promise<Grade> {
        return firstValueFrom(this.httpClient.get<Grade>(environment.apiUrl + `/admin/grades/` + id));
    }
}