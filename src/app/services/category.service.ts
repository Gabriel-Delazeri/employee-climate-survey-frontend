import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/domain/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private uri: string = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.uri);
  }
}
