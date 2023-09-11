import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infra/auth.guard';
import { AdminLoginPageComponent } from './components/admin-login-page/admin-login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: AdminLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
