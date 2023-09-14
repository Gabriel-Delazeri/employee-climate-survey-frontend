import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/domain/Survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
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
