import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infra/auth.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SurveysPageComponent } from './pages/admin/surveys/surveys-page.component';
import { SurveyPageComponent } from './pages/admin/survey/survey-page.component';
import { SurveyComponent } from './pages/common/survey/survey.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'survey/:surveyId',
    component: SurveyComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
      { path: 'surveys', canActivate: [AuthGuard], component: SurveysPageComponent},
      { path: 'surveys/:id', canActivate: [AuthGuard], component: SurveyPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
