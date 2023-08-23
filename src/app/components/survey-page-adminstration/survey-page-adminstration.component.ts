import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/types/Survey';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';

@Component({
  selector: 'app-survey-page-adminstration',
  templateUrl: './survey-page-adminstration.component.html',
  styleUrls: ['./survey-page-adminstration.component.css'],
})
export class SurveyPageAdminstrationComponent implements OnInit {
  survey: Survey = {
    id: '',
    title: '',
    description: '',
    questions: [],
  };

  isModalOpen: boolean = false;

  constructor(private route: ActivatedRoute, private service: SurveyService, private dialog: MatDialog) {}

  ngOnInit() {
    let surveyId = this.route.snapshot.paramMap.get('surveyId');

    if (surveyId !== null) {
      this.setSurvey(surveyId);
    }
  }

  setSurvey(surveyId: string): void {
    this.service
      .getSurveyById(surveyId)
      .subscribe((survey) => (this.survey = survey));
  }

  openQuestionModal() : void {
    this.isModalOpen = true;
    const dialogRef = this.dialog.open(AddQuestionModalComponent, {
      width: '400px',
      data: {
        surveyId: this.survey.id
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.isModalOpen = false;
    })
  }

  handleModalClosed() : void {
    this.isModalOpen = false;
  }
}
