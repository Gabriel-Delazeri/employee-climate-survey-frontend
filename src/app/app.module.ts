import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LucideAngularModule, Eye, Edit, Trash, Plus, X } from 'lucide-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent
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
