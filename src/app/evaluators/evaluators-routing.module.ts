import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluatorsLayoutComponent } from './pages/evaluators-layout/evaluators-layout.component';
import { EvaluationsListPageComponent } from './pages/evaluations-list-page/evaluations-list-page.component';
import { EvaluationShowPageComponent } from './pages/evaluation-show-page/evaluation-show-page.component';
import { EvaluationModifyPageComponent } from './pages/evaluation-modify-page/evaluation-modify-page.component';
import { EvaluationCreatePageComponent } from './pages/evaluation-create-page/evaluation-create-page.component';
import { EvaluationStartEvalPageComponent } from './pages/evaluation-start-eval-page/evaluation-start-eval-page.component';
import { TestsStatusComponent } from './pages/tests-status/tests-status.component';
import { EvaluationUsersStoryComponent } from './pages/evaluation-users-story/evaluation-users-story.component';
import { EvaluationWaitingConnectionPageComponent } from './pages/evaluation-waiting-connection-page/evaluation-waiting-connection-page.component';
import { EvaluationUsersStoriesPageComponent } from './pages/evaluation-users-stories-page/evaluation-users-stories-page.component';
import { EvaluatorsTestPartsListPageComponent } from './pages/evaluators-test-parts-list-page/evaluators-test-parts-list-page.component';
import { EvaluationExplainPartPageComponent } from './pages/evaluation-explain-part-page/evaluation-explain-part-page.component';
import { EvaluationResultsPageComponent } from './pages/evaluation-results-page/evaluation-results-page.component';
import { StudentResultsPageComponent } from './pages/student-results-page/student-results-page.component';
import { GroupsReportsPageComponent } from './pages/groups-reports-page/groups-reports-page.component';
import { EvaluationObservationPageComponent } from './pages/evaluation-observation-page/evaluation-observation-page.component';
import { StudentObservationPageComponent } from './pages/student-observation-page/student-observation-page.component';
import { ResultsListPageComponent } from './pages/results-list-page/results-list-page.component';
import { EvaluationsProgressPageComponent } from './pages/evaluations-progress-page/evaluations-progress-page.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluatorsLayoutComponent,
    children: [
      {
        // Para ver la lista de evaluaciones
        path: '',
        component: EvaluationsListPageComponent
      },
      {
        path: 'startEvaluation',
        component: EvaluationStartEvalPageComponent
      },
      {
        path: 'userStory',
        component: EvaluationUsersStoryComponent
      },
      {
        path: 'usersStories',
        component: EvaluationUsersStoriesPageComponent
      },
      {
        path: 'usersStory',
        component: EvaluationUsersStoriesPageComponent
      },
      {
        // Para crear una evaluación
        path: 'create',
        component: EvaluationCreatePageComponent
      },
      {
        // Para ver una evaluación específica
        path: ':id',
        component: EvaluationShowPageComponent,
      },
      {
        path: ':id/connection',
        component: EvaluationWaitingConnectionPageComponent
      },
      {
        path: ':id/test',
        component: TestsStatusComponent
      },
      {
        path: ':evaluationId/test/:evaluationTestId',
        component: EvaluatorsTestPartsListPageComponent
      },
      {
        path: ':evaluationId/test/:evaluationTestId/parts/:evaluationTestPartId/explain',
        component: EvaluationExplainPartPageComponent
      },
      {
        path: ':id/connection',
        component: EvaluationWaitingConnectionPageComponent
      },
      {
        path: ':id/test',
        component: TestsStatusComponent
      },
      {
        path: ':evaluationId/test/:idTest',
        component: EvaluatorsTestPartsListPageComponent
      },
      {
        path: ':evaluationId/test/:idTest/explain',
        component: EvaluationExplainPartPageComponent
      },
      {
        path: ':evaluationId/test/:evaluationTestId/parts/:evaluationTestPartId/progress',
        component: EvaluationsProgressPageComponent
      },
      {
        // Para modificar una evaluación específica
        path: 'modify/:id',
        component: EvaluationModifyPageComponent
      },
      {
        path: ':id/observations',
        component: EvaluationResultsPageComponent,
      },
      {
        // Para ver los reportes de un estudiante en específico, de una evaluación en específico
        path: ':id/observations/:id',
        component: StudentResultsPageComponent,
      },
      {
        // Para ver los reportes de grupos
        path: 'observations/groups/:id',
        component: GroupsReportsPageComponent,
      },
      {
        // Para añadir las observaciones a los grupos
        path: 'observations/groups/:id/list/observation',
        component: EvaluationObservationPageComponent,
      },
      {
        // Para añadir las observaciones a los estudiantes
        path: 'observations/groups/:id/list/:id',
        component: StudentObservationPageComponent,
      },
      {
        // Para ver la lista de estudiantes
        path: 'observations/groups/:id/list',
        component: ResultsListPageComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorsRoutingModule { }
