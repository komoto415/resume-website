import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from '../home/resume/languages/languages.service';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    titleQueryAux: string;
    tagQueryAux: string;
    filteredTags: string[];

    captureTitle(title) {
        this.titleQueryAux = title;
        // console.log(this.titleQueryAux);
    }

    captureTags(tags) {
        this.tagQueryAux = tags;
        // console.log(this.tagQueryAux);
    }

    capturefilteredTags(tags) {
        console.log(tags);
        this.filteredTags = tags
        console.log(this.filteredTags);
    }


    constructor(public projectsService: ProjectsService, public languageService: LanguagesService, public router: Router) {
        this.filteredTags = this.projectsService.getAllTags();
    }

    ngOnInit(): void {
        this.tagQueryAux = this.languageService.language;
    }

    isParentUrl() {
        return this.router.url === '/projects'
    }

    urlToTitle: Object = {
        "wego-services": "We Go Services",
        "comp-to-algo": "Components-Algorithms Bridge Assignment",
        "first-project": "Humble Beginnings",
        "enigma": "My Enigma Machine",
    }

    getCurretProject(): string {
        var url: Array<String> = this.router.url.split('/');
        return this.urlToTitle[`${url[url.length - 1]}`];
    }
}
