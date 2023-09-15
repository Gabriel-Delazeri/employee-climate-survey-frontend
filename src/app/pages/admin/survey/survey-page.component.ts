import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';
import { SurveyService } from 'src/app/services/survey.service';
import { Access } from 'src/app/types/domain/Access';
import { AccessStatus } from 'src/app/types/domain/AccessStatus';
import { Pageable } from 'src/app/types/domain/Pageable';
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

  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private accessService: AccessService){}

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.id = id;

      this.surveyService.getSurveyById(id).subscribe((surveyResponse) => this.survey = surveyResponse);
    }
  }

  checkAccessStatus(access: Access) : string | AccessStatus {
    return access.status;
  }
}
