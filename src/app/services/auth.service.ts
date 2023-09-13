import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationRequestDto } from "../types/AuthenticationRequestDto";
import { AuthenticationResponseDto } from "../types/AuthenticationResponseDto";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private uri : string = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient){}
    
    login(authenticationData: AuthenticationRequestDto) {
        return this.http.post<AuthenticationResponseDto>(`${this.uri}/login`, authenticationData);
    }
}