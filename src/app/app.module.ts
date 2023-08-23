import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyAdministrationComponent } from './components/survey-administration/survey-administration.component';
import { LucideAngularModule, Eye, Edit, Trash, Plus, X } from 'lucide-angular';
import { SurveyPageAdminstrationComponent } from './components/survey-page-adminstration/survey-page-adminstration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddQuestionModalComponent } from './components/add-question-modal/add-question-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyAdministrationComponent,
    SurveyPageAdminstrationComponent,
    AddQuestionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LucideAngularModule.pick({Eye, Edit, Trash, Plus, X}),
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
