import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/Survey';

@Component({
  selector: 'app-survey-admin-page',
  templateUrl: './survey-admin-page.component.html',
  styleUrls: ['./survey-admin-page.component.css']
})
export class SurveyAdminPageComponent implements OnInit {
  private id: string = '';

  survey: Survey = {
    id: '',
    title: '',
    description: '',
    questions: [],
    access_list: []
  };

  constructor(private route: ActivatedRoute, private surveyService: SurveyService){}

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');

    if (id != null) { 
      this.id = id;

      this.surveyService.getSurveyById(id).subscribe((surveyResponse) => this.survey = surveyResponse);
    }
  }
}
