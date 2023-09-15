import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/domain/Survey';
import { AnswerDto } from 'src/app/types/dtos/AnswerDto';
import { RequestSurveyDto } from 'src/app/types/dtos/RequestSurveyDto';
import { ValidateAccessDto } from 'src/app/types/dtos/ValidateAccessDto';
import { ValidateAccessResponse } from 'src/app/types/dtos/ValidateAccessResponse';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit{
  validateAccessDto: ValidateAccessDto = {
    accessId: '',
    surveyId: ''
  }

  validateAccessResponse: ValidateAccessResponse = {
    message: '',
    valid: false
  }

  survey: Survey = {
    id: '',
    title: '',
    description: '',
    questions: [],
    access_list: []
  }
  
  surveyResult: RequestSurveyDto = {
    accessId: '',
    answers: []
  }

  answers: AnswerDto[] = []

  id : string = '';
  accessToken : string = '';

  constructor(
    private route : ActivatedRoute,
    private accessService: AccessService,
    private router: Router,
    private surveyService: SurveyService
  ){}

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('surveyId');

    if (id != null) {
      this.validateAccessDto.surveyId = id;
    }

    this.route.queryParams.subscribe(params => {
      this.validateAccessDto.accessId = params['token'];
    });

    this.accessService.validateAccess(this.validateAccessDto).subscribe(
      access => {
        this.validateAccessResponse = access;
      }, 
      error => {
        this.returnIfAccessIsNotAllowed();
      })

    if (this.validateAccessResponse.valid == true) {
      this.returnIfAccessIsNotAllowed();
    }

    this.surveyService.getSurveyById(this.validateAccessDto.surveyId).subscribe(survey => {
      this.survey = survey;
    })
  }

  returnIfAccessIsNotAllowed() : void {
    this.router.navigate(['/']);
  }

  handleSubmit() : void {
    console.log('pass');
  }
}
