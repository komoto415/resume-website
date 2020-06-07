import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicalSkillsService } from '../home/resume/technical-skills/technical-skills.service';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    titleQueryAux: string;
    tagQueryAux: string;
    tagsInViewAux: string[];

    captureTitle(title) {
        this.titleQueryAux = title;
        // console.log(this.titleQueryAux);
    }

    captureTags(queryTags) {
        this.tagQueryAux = queryTags;
        // console.log(this.tagQueryAux);
    }

    capturefilteredTags(filteredTags) {
        this.tagsInViewAux = filteredTags
        // console.log(this.tagsInViewAux);
    }


    constructor(public projectsService: ProjectsService, public technicalSkillsService: TechnicalSkillsService, public router: Router) {
    }

    ngOnInit(): void { }

    isParentUrl() {
        return this.router.url === '/projects'
    }

    urlToTitle: Object = {
        "wego-services": "WeGo Services",
        "comp-to-algo": "Components-Algorithms Bridge Assignment",
        "first-project": "Login and Register",
        "enigma": "My Enigma Machine",
        "resume-website": "How Incredibly Meta"
    }

    getCurretProject(): string {
        var url: Array<String> = this.router.url.split('/');
        return this.urlToTitle[`${url[url.length - 1]}`];
    }
}
