import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ExamGateway} from "../domain/models/exam.gateway";
import {ExamModel} from "../domain/models/exam.model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })

export class ExamAdapter extends ExamGateway{

  private endpointExam = "http://localhost:8080/api/exam";

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  override saveExam(exam: ExamModel): Observable<ExamModel> {
    return this.httpClient.post<ExamModel>(this.endpointExam, exam);
  }

  override getExams(): Observable<ExamModel[]> {
    return this.httpClient.get<ExamModel[]>(this.endpointExam);
  }

}
