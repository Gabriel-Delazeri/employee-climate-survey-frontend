import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from '../types/domain/Access';
import { Observable } from 'rxjs';
import { ValidateAccessDto } from '../types/dtos/ValidateAccessDto';
import { ValidateAccessResponse } from '../types/dtos/ValidateAccessResponse';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private uri = 'http://localhost:8080/api/access';

  constructor(private httpClient : HttpClient) { }

  updateAccess(access : Access) : Observable<Access> {
    return this.httpClient.put<Access>(`${this.uri}/${access.id}`, access);
  }

  validateAccess(validateAccessDto: ValidateAccessDto): Observable<ValidateAccessResponse> {
    return this.httpClient.post<ValidateAccessResponse>(`${this.uri}/validate`, validateAccessDto);
  }
}
