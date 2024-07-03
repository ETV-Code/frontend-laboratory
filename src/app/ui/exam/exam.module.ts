import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import {ExamUseCase} from "../../domain/usecases/exam.usecase";
import {ExamGateway} from "../../domain/models/exam.gateway";
import {ExamAdapter} from "../../infrastructure/exam.adapter";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ExamComponent
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
