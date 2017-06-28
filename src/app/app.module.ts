import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginRequiredComponent } from './login-required/login-required.component';
import { LoginModalComponent } from './header/login-modal/login-modal.component';
import { RegisterModalComponent } from './header/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from './header/forgot-password-modal/forgot-password-modal.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoggedInComponent,
    LoginRequiredComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ForgotPasswordModalComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    ModalModule,
    TextEqualityValidatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AlertModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
