import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/Survey';

@Component({
  selector: 'app-survey-administration',
  templateUrl: './survey-administration.component.html',
  styleUrls: ['./survey-administration.component.css']
})
export class SurveyAdministrationComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit(): void {
    this.setSurveys()
  }

  setSurveys() : void {
    this.surveyService.getSurveys().subscribe((surveys) => this.surveys = surveys);
  }
}
