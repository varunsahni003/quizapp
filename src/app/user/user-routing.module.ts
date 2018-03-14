import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent, DialogOverviewExampleDialog } from './dashboard/dashboard.component';
import { CardQuestionsComponent } from './card-questions/card-questions.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'feedback',
    component: DialogOverviewExampleDialog
  },
  {
    path: 'score',
    component: ScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
