import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './create-exam/exam.component';
import {ExamUseCase} from "../../domain/usecases/exam.usecase";
import {ExamGateway} from "../../domain/models/exam.gateway";
import {ExamAdapter} from "../../infrastructure/exam.adapter";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewExamComponent } from './view-exam/view-exam.component';


@NgModule({
  declarations: [
    ExamComponent,
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ExamUseCase, {provide: ExamGateway, useClass: ExamAdapter}
  ]
})
export class ExamModule { }
