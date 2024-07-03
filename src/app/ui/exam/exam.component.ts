import {Component, OnInit} from '@angular/core';

import {ExamUseCase} from "../../domain/usecases/exam.usecase";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{

  examForm: FormGroup = new FormGroup({});

  constructor(
    private examUseCase: ExamUseCase,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setUpForm();
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
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
