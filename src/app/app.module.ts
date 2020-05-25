import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { SlidesComponent } from './slides/slides.component';
import { EducationCardComponent } from './resume/education-card/education-card.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { ExperiencesComponent } from './resume/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    ResumeComponent,
    SlidesComponent,
    EducationCardComponent,
    LanguagesComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
