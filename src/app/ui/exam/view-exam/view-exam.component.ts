import {Component, OnInit} from '@angular/core';
import {ExamModel} from "../../../domain/models/exam.model";
import {ExamUseCase} from "../../../domain/usecases/exam.usecase";

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit{
  dataSource: ExamModel[] = [];
  constructor(
    private examUseCase: ExamUseCase,
  ) {}

  ngOnInit(): void {
    this.getExams();
  }

  getExams() {
    this.examUseCase.getExams().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
