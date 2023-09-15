import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class SurveyGuard implements CanActivate, OnInit {
    private params : any;
    
    constructor(private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.params = params;
        });  
    }

    canActivate() : boolean {
        console.log(this.params)
        return true;
    }
}