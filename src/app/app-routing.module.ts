import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurveyAdministrationComponent } from './components/survey-administration/survey-administration.component';
import { SurveyPageAdminstrationComponent } from './components/survey-page-adminstration/survey-page-adminstration.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/surveys', component: SurveyAdministrationComponent},
  { path: 'admin/surveys/:surveyId', component: SurveyPageAdminstrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
