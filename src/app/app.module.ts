import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './home/resume/resume.component';
import { SlidesComponent } from './home/slides/slides.component';
import { EducationCardComponent } from './home/resume/education-card/education-card.component';
import { LanguagesComponent } from './home/resume/languages/languages.component';
import { ExperiencesComponent } from './home/resume/experiences/experiences.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ClassComponentsComponent } from './home/resume/education-card/class-components/class-components.component';
import { ClassSweComponent } from './home/resume/education-card/class-swe/class-swe.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { FlavourOneComponent } from './home/flavour-one/flavour-one.component';
import { FlavourTwoComponent } from './home/flavour-two/flavour-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WegoServicesComponent } from './projects/wego-services/wego-services.component';
import { CompToAlgoComponent } from './projects/comp-to-algo/comp-to-algo.component';
import { ProjectControllerComponent } from './projects/project-controller/project-controller.component';

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
    ContactMeComponent,
    FooterComponent,
    ClassComponentsComponent,
    ClassSweComponent,
    AboutMeComponent,
    ProjectsComponent,
    HomeComponent,
    FlavourOneComponent,
    FlavourTwoComponent,
    PageNotFoundComponent,
    WegoServicesComponent,
    CompToAlgoComponent,
    ProjectControllerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
