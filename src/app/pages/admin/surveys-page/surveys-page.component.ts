import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/Survey';

@Component({
  selector: 'app-surveys-page',
  templateUrl: './surveys-page.component.html',
  styleUrls: ['./surveys-page.component.css']
})
export class SurveysPageComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService){}

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe((response) => this.surveys = response);    
  }
}
