import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExamComponent} from "./create-exam/exam.component";
import {ViewExamComponent} from "./view-exam/view-exam.component";

const routes: Routes = [
  {
    path: '',
    component: ExamComponent
  },
  {
    path: 'view-exam',
    component: ViewExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
