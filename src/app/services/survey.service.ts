import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../types/Survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private uri: string = 'http://localhost:8080/api/surveys';

  constructor(private http: HttpClient) { }

  getSurveys() : Observable<Survey[]> {
    return this.http.get<Survey[]>(this.uri);
  }
}
