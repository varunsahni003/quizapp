import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


import { DashboardComponent, DialogOverviewExampleDialog } from './dashboard/dashboard.component';
import { QuizesComponent } from './quizes/quizes.component';
import { MaterialModule } from '../app.material.module';
import { CardQuestionsComponent } from './card-questions/card-questions.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    CommonModule, 
    UserRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent, 
    QuizesComponent, 
    CardQuestionsComponent,
    DialogOverviewExampleDialog,
    ScoreComponent
  ]
})
export class UserModule { }
