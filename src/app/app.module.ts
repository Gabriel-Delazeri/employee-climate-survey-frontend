import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LucideAngularModule, Eye, Edit, Trash, Plus, X, LogOut } from 'lucide-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SurveysPageComponent } from './pages/admin/surveys/surveys-page.component';
import { SurveyPageComponent } from './pages/admin/survey/survey-page.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    SurveysPageComponent,
    SurveyPageComponent,
    NavbarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LucideAngularModule.pick({Eye, Edit, Trash, Plus, X, LogOut}),
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
