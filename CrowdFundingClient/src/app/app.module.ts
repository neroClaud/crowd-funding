import { RangeSliderModule } from 'ngx-rangeslider-component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { UserService } from './services/user.service';
import { CityService } from './services/city.service';
import { ProjectServiceService } from './services/project-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthenticationService } from './service/authentication-service.service';
import { JwtUtilsService } from './service/jwt-utils.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { CanActivateAuthGuard } from './service/can-activate-auth.guard';
import { MainComponent } from './page/main/main.component';
import { FilterComponent } from './filter/filter.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { RegisterComponent } from './register/register.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './services/comment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressBarModule} from "angular-progress-bar";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'main', component: MainComponent, canActivate:[CanActivateAuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainComponent,
    FilterComponent,
    AddProjectComponent,
    RegisterComponent,
    ProjectDetailsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RangeSliderModule,
    IonRangeSliderModule,
    ReactiveFormsModule,
    ProgressBarModule,
    NgxPaginationModule,
   
    PaginationModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    ProjectServiceService,
    CityService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
