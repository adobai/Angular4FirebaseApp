import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginRequiredComponent } from './login-required/login-required.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'logged-in', canActivate: [AuthGuard], component: LoggedInComponent},
  { path: 'login-required', component: LoginRequiredComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
