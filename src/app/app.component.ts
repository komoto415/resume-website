import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from './home/resume/languages/languages.service';
import { ProjectsService } from './projects/projects.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LanguagesService, ProjectsService,]
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
