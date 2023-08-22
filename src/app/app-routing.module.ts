import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurveyAdministrationComponent } from './components/survey-administration/survey-administration.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/survey', component: SurveyAdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
