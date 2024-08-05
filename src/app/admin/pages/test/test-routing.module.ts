import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestListPageComponent } from './pages/test-list-page/test-list-page.component';
import { TestModifyPageComponent } from './pages/test-modify-page/test-modify-page.component';
import { TestCreatePageComponent } from './pages/test-create-page/test-create-page.component';
import { TestShowPageComponent } from './pages/test-show-page/test-show-page.component';
import { TestPartsCreatePageComponent } from './pages/test-parts-create-page/test-parts-create-page.component';
import { TestPartsModifyPageComponent } from './pages/test-parts-modify-page/test-parts-modify-page.component';
import { TestPartsShowPageComponent } from './pages/test-parts-show-page/test-parts-show-page.component';
import { TestQuestionsModifyPageComponent } from './pages/test-questions-modify-page/test-questions-modify-page.component';
import { TestOptionsCreatePageComponent } from './pages/test-options-create-page/test-options-create-page.component';
import { TestOptionsModifyPageComponent } from './pages/test-options-modify-page/test-options-modify-page.component';
import { LayoutComponent } from '../layout/layout.component';
import { TestQuestionsCreatePageComponent } from './pages/test-questions-create-page/test-questions-create-page.component';
import { TestQuestionsShowPageComponent } from './pages/test-questions-show-page/test-questions-show-page.component';

const routes: Routes = [
  { path: '', 
    component: LayoutComponent,
    children: [
  { path: '', component: TestListPageComponent },
  { path: "test/create", component: TestCreatePageComponent },
  { path: "test/:testId", redirectTo: "test/:testId/parts", pathMatch: "full" },
  { path: "test/:testId/modify", component: TestModifyPageComponent },
  { path: "test/:testId/parts", component: TestShowPageComponent },
  { path: "test/:testId/parts/create", component: TestPartsCreatePageComponent},
  { path: "test/:testId/parts/:partId", redirectTo: "test/:testId/parts/:partId/questions", pathMatch: "full"},
  { path: "test/:testId/parts/:partId/modify", component: TestPartsModifyPageComponent},
  { path: "test/:testId/parts/:partId/questions", component: TestPartsShowPageComponent},
  { path: "test/:testId/parts/:partId/questions/create", component: TestQuestionsCreatePageComponent},
  { path: "test/:testId/parts/:partId/questions/:questionId", redirectTo: "test/:testId/parts/:partId/questions/:questionId/options", pathMatch: "full"},
  { path: "test/:testId/parts/:partId/questions/:questionId/modify", component: TestQuestionsModifyPageComponent},
  { path: "test/:testId/parts/:partId/questions/:questionId/options", component: TestQuestionsShowPageComponent},
  { path: "test/:testId/parts/:partId/questions/:questionId/options/create", component: TestOptionsCreatePageComponent},
  { path: "test/:testId/parts/:partId/questions/:questionId/options/:optionId", redirectTo: "test/:testId/parts/:partId/questions/:questionId/options/:optionId/modify", pathMatch: "full"},
  { path: "test/:testId/parts/:partId/questions/:questionId/options/:optionId/modify", component: TestOptionsModifyPageComponent}
]}];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
