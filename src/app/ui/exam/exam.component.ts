import {Component, OnInit} from '@angular/core';

import {ExamUseCase} from "../../domain/usecases/exam.usecase";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExamModel} from "../../domain/models/exam.model";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{

  examForm: FormGroup = new FormGroup({});

  dataSource: ExamModel[] = [];

  constructor(
    private examUseCase: ExamUseCase,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setUpForm();
    this.getExams();
  }


  setUpForm() {
    this.examForm = this.formBuilder.group({
      name: [''],
      description: [''],
    });
  }

  saveExam() {
    console.log({examForm: this.examForm.value});
    this.examUseCase.saveExam(this.examForm.value).subscribe({
      next: (response) => {
        console.log(response);
        setTimeout(() =>{
          window.location.reload()
        }, 1000)
      },
      error: (error) => {
        console.log(error);
      }
    })
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
