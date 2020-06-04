import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicalSkillsService } from './home/resume/technical-skills/technical-skills.service';
import { ProjectsService } from './projects/projects.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TechnicalSkillsService, ProjectsService,]
})

export class AppComponent implements OnInit {
    title = 'website';

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    checkURL(str:string) {
        return this.router.url.includes(str);
    }
}
