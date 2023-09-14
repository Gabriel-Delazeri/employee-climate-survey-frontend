import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../types/domain/Question';
import { QuestionRequest } from '../types/dtos/QuestionRequest';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private uri: string = 'http://localhost:8080/api/questions';

  constructor(private http: HttpClient) { }

  createQuestion(questionRequest: QuestionRequest) : Observable<Question> {
    return this.http.post<Question>(this.uri, questionRequest);
  }
}
