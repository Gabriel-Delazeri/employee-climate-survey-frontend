import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';
import { QuestionRequest } from 'src/app/types/QuestionRequest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.css'],
})
export class AddQuestionModalComponent implements OnInit {
  categories: Category[] = [];

  questionRequest: QuestionRequest = {
    title: '',
    content: '',
    categoryId: '',
    surveyId: '',
  };

  constructor(
    public dialogRef: MatDialogRef<AddQuestionModalComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.setCategories();
    this.questionRequest.surveyId = this.data.surveyId;
  }

  setCategories() {
    this.categoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  closeModal() {
    this.dialogRef.close();
  }

  async handleQuestionSave() {
    try {
      this.questionService.createQuestion(this.questionRequest).subscribe();
      this.closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
