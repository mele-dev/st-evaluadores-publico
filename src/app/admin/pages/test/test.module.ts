import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestListPageComponent } from './pages/test-list-page/test-list-page.component';
import { TestListItemComponent } from './components/test-list-item/test-list-item.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestModifyPageComponent } from './pages/test-modify-page/test-modify-page.component';
import { TestCreatePageComponent } from './pages/test-create-page/test-create-page.component';
import { TestPartsModifyPageComponent } from './pages/test-parts-modify-page/test-parts-modify-page.component';
import { TestPartsCreatePageComponent } from './pages/test-parts-create-page/test-parts-create-page.component';
import { TestShowPageComponent } from './pages/test-show-page/test-show-page.component';
import { TestPartsShowPageComponent } from './pages/test-parts-show-page/test-parts-show-page.component';
import { TestQuestionsModifyPageComponent } from './pages/test-questions-modify-page/test-questions-modify-page.component';
import { PartsFormComponent } from './components/parts-form/parts-form.component';
import { TestOptionsCreatePageComponent } from './pages/test-options-create-page/test-options-create-page.component';
import { TestOptionsModifyPageComponent } from './pages/test-options-modify-page/test-options-modify-page.component';
import { QuestionsListItemComponent } from './components/questions-list-item/questions-list-item.component';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';
import { TestQuestionsCreatePageComponent } from './pages/test-questions-create-page/test-questions-create-page.component';
import { TestQuestionsShowPageComponent } from './pages/test-questions-show-page/test-questions-show-page.component';
import { OptionsFormComponent } from './components/options-form/options-form.component';
import { OptionsListItemComponent } from './components/options-list-item/options-list-item.component';
import { PartsListItemComponent } from './components/parts-list-item/parts-list-item.component';


@NgModule({
  declarations: [
    TestListPageComponent,
    TestListItemComponent,
    TestFormComponent,
    TestModifyPageComponent,
    TestCreatePageComponent,
    TestPartsModifyPageComponent,
    TestPartsCreatePageComponent,
    TestShowPageComponent,
    TestPartsShowPageComponent,
    TestQuestionsModifyPageComponent,
    TestQuestionsCreatePageComponent,
    TestQuestionsShowPageComponent,
    PartsFormComponent,
    PartsListItemComponent,
    TestOptionsCreatePageComponent,
    TestOptionsModifyPageComponent,
    QuestionsFormComponent,
    QuestionsListItemComponent,
    OptionsFormComponent,
    OptionsListItemComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class TestModule { }
