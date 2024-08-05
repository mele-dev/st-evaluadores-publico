import { Component, inject } from '@angular/core';
import { Grade } from '../../interfaces/grade.interface';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-grades-list-page',
  templateUrl: './grades-list-page.component.html',
  styleUrl: './grades-list-page.component.css'
})
export class GradesListPageComponent {

  public gradesList: Grade[] = [];

  private gradeService: GradeService = inject(GradeService);

  async ngOnInit(): Promise<void> {
    this.gradesList = await this.gradeService.getGrades();
  }

  public async deleteGrade(id: number) {
    try {
      await this.gradeService.deleteGrade(id);
      this.gradesList = await this.gradeService.getGrades();
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
