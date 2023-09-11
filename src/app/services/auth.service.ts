import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private uri : string = 'http://localhost:8080/api/auth/';

    constructor(private http: HttpClient){}
    
    login(login: string, password: string) {
        return this.http.post<any>(`${this.uri}/login`, { login , password });
    }
}