import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ExamGateway} from "../models/exam.gateway";
import {ExamModel} from "../models/exam.model";

@Injectable({providedIn: 'root'})
export class ExamUseCase {
  constructor(private examGateway: ExamGateway) {}

  saveExam(exam: ExamModel): Observable<ExamModel> {
    return this.examGateway.saveExam(exam);
  }

  getExams(): Observable<ExamModel[]> {
    return this.examGateway.getExams();
  }
}
