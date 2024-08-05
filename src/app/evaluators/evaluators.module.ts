import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EvaluatorsRoutingModule } from './evaluators-routing.module';
import { EvaluationsListPageComponent } from './pages/evaluations-list-page/evaluations-list-page.component';
import { EvaluatorsLayoutComponent } from './pages/evaluators-layout/evaluators-layout.component';
import { EvaluationCreatePageComponent } from './pages/evaluation-create-page/evaluation-create-page.component';
import { EvaluationModifyPageComponent } from './pages/evaluation-modify-page/evaluation-modify-page.component';
import { EvaluationShowPageComponent } from './pages/evaluation-show-page/evaluation-show-page.component';
import { EvaluationCardComponent } from './components/evaluation-card/evaluation-card.component';
import { FormsModule } from '@angular/forms';
import { EvaluationStartEvalPageComponent } from './pages/evaluation-start-eval-page/evaluation-start-eval-page.component';
import { EvaluationUsersInEvalComponent } from './components/evaluation-users-in-eval/evaluation-users-in-eval.component';
import { TestsStatusComponent } from './pages/tests-status/tests-status.component';
import { EvaluationUsersStoryComponent } from './pages/evaluation-users-story/evaluation-users-story.component';
import { EvaluationWaitingConnectionPageComponent } from './pages/evaluation-waiting-connection-page/evaluation-waiting-connection-page.component';
import { EvaluationUsersStoriesPageComponent } from './pages/evaluation-users-stories-page/evaluation-users-stories-page.component';
import { EvaluatorsTestPartsListPageComponent } from './pages/evaluators-test-parts-list-page/evaluators-test-parts-list-page.component';
import { EvaluationCreateCardComponent } from './components/evaluation-create-card/evaluation-create-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EvaluationShowComponent } from './components/evaluation-show/evaluation-show.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { EvaluationListComponent } from './components/evaluation-list/evaluation-list.component';
import { EvaluationResultsPageComponent } from './pages/evaluation-results-page/evaluation-results-page.component';
import { StudentResultsPageComponent } from './pages/student-results-page/student-results-page.component';
import { GroupsReportsPageComponent } from './pages/groups-reports-page/groups-reports-page.component';
import { ObservationCardComponent } from './components/observation-card/observation-card.component';
import { StudentObservationPageComponent } from './pages/student-observation-page/student-observation-page.component';
import { EvaluationObservationPageComponent } from './pages/evaluation-observation-page/evaluation-observation-page.component';
import { ResultsListPageComponent } from './pages/results-list-page/results-list-page.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';
import { EvaluationsProgressPageComponent } from './pages/evaluations-progress-page/evaluations-progress-page.component';



@NgModule({
  declarations: [
    EvaluationsListPageComponent,
    EvaluatorsLayoutComponent,
    EvaluationCreatePageComponent,
    EvaluationModifyPageComponent,
    EvaluationShowPageComponent,
    EvaluationCardComponent,
    EvaluationFormComponent,
    EvaluationStartEvalPageComponent,
    EvaluationUsersInEvalComponent,
    TestsStatusComponent,
    EvaluationUsersStoryComponent,
    EvaluationWaitingConnectionPageComponent,
    EvaluationUsersStoriesPageComponent,
    EvaluatorsTestPartsListPageComponent,
    EvaluationCreateCardComponent,
    EvaluationShowComponent,
    EvaluationListComponent,
    EvaluationResultsPageComponent,
    StudentResultsPageComponent,
    GroupsReportsPageComponent,
    ObservationCardComponent,
    StudentObservationPageComponent,
    EvaluationObservationPageComponent,
    ResultsListPageComponent,
    StudentCardComponent,
    EvaluationsProgressPageComponent,

  ],
  imports: [
    CommonModule,
    EvaluatorsRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AuthModule,
    SharedModule,
    CKEditorModule,
  ]
})
export class EvaluatorsModule { }
