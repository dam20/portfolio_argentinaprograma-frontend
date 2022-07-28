import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/profile/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/profile/header/header.component';
import { AboutMeComponent } from './components/profile/about-me/about-me.component';
import { ExperienceComponent } from './components/profile/experience/experience.component';
import { EducationComponent } from './components/profile/education/education.component';
import { SkillsComponent } from './components/profile/skills/skills.component';
import { ProjectsComponent } from './components/profile/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioService } from './service/portfolio.service';
import { InterceptorService } from './service/interceptor.service';
// import { PortfolioService } from './service/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      "radius": 80,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": true,
      "animationDuration": 1000,
      "showSubtitle": false,
      "showUnits": true,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "responsive": false,
      "lazy": true}),
  ],
  providers: [PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
