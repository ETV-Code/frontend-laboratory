import {Observable} from "rxjs";
import {ExamModel} from "./exam.model";

export abstract class ExamGateway {
  abstract saveExam(exam: ExamModel): Observable<ExamModel>;
  abstract getExams(): Observable<ExamModel[]>;
}
