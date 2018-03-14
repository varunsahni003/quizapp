import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule, ReviewerRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class ReviewerModule { }
