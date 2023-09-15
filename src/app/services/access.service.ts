import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from '../types/domain/Access';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private uri = 'http://localhost/api/access';

  constructor(private httpClient : HttpClient) { }

  updateAccess(access : Access) : Observable<Access> {
    return this.httpClient.put<Access>(`${this.uri}/${access.id}`, access);
  }
}
