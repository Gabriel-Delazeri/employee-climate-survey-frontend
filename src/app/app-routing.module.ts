import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infra/auth.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SurveysPageComponent } from './pages/admin/surveys-page/surveys-page.component';
import { SurveyAdminPageComponent } from './pages/admin/survey-admin-page/survey-admin-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'login', component: AdminLoginComponent},
      { path: 'dashboard', canActivate: [AuthGuard], component: AdminDashboardComponent},
      { path: 'surveys', canActivate: [AuthGuard], component: SurveysPageComponent},
      { path: 'surveys/:id', canActivate: [AuthGuard], component: SurveyAdminPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
