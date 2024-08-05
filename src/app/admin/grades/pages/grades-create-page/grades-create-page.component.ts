import { Component, inject } from '@angular/core';
import { Grade } from '../../interfaces/grade.interface';
import { GradeService } from '../../services/grade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades-create-page',
  templateUrl: './grades-create-page.component.html',
  styleUrl: './grades-create-page.component.css'
})
export class GradesCreatePageComponent {

  private gradeService: GradeService = inject(GradeService);
  private router: Router = inject(Router);

  public async createGrade(grade: Grade) {
    try {
      await this.gradeService.createGrade(grade);
      this.router.navigate([`admin/grades`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
