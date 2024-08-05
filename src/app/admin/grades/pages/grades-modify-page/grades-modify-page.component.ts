import { Component, Input, OnInit, inject } from '@angular/core';
import { Grade } from '../../interfaces/grade.interface';
import { GradeService } from '../../services/grade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades-modify-page',
  templateUrl: './grades-modify-page.component.html',
  styleUrl: './grades-modify-page.component.css'
})
export class GradesModifyPageComponent implements OnInit {

  public grade?: Grade;

  @Input()
  id?: number;

  private gradeService: GradeService = inject(GradeService);
  private router: Router = inject(Router);

  async ngOnInit(): Promise<void> {
    if (!this.id) {
      throw new Error('No hay ID en la ruta');
    }
    console.log('id ruta = ' + this.id);
    this.grade = await this.gradeService.getGradeById(this.id);
  }

  public async modifyGrade(id: number, grade: Grade) {
    try {
      await this.gradeService.modifyGrade(id, grade);
      this.router.navigate([`admin/grades`]);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async onModifyGrade(grade: Grade) {
    try {
      await this.modifyGrade(grade.id, grade);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
