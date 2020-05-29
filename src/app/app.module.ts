import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { SlidesComponent } from './slides/slides.component';
import { EducationCardComponent } from './resume/education-card/education-card.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { ExperiencesComponent } from './resume/experiences/experiences.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ClassComponentsComponent } from './resume/education-card/class-components/class-components.component';
import { ClassSweComponent } from './resume/education-card/class-swe/class-swe.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './projects/filter.pipe';

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
    FilterPipe,
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
