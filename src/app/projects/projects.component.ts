import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicalSkillsService } from '../home/resume/technical-skills/technical-skills.service';
import { ProjectsService } from './projects.service';
import { WindowPositionService } from '../site-wide-services/window-position.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    titleQueryAux: string;
    tagQueryAux: string;
    tagsInViewAux: string[];

    captureTitle(title): void {
        this.titleQueryAux = title;
        // console.log(this.titleQueryAux);
    }

    captureTags(queryTags): void {
        this.tagQueryAux = queryTags;
        // console.log(this.tagQueryAux);
    }

    capturefilteredTags(filteredTags): void {
        this.tagsInViewAux = filteredTags
        // console.log(this.tagsInViewAux);
    }


    constructor(public windowPosition: WindowPositionService, public projectsService: ProjectsService, public technicalSkillsService: TechnicalSkillsService, public router: Router) {
    }

    ngOnInit(): void { }

    isParentUrl(): boolean {
        return this.router.url === '/projects'
    }

    urlToTitle: Object = {
        "wego-services": "WeGo Services",
        "comp-to-algo": "Components-Algorithms Bridge Assignment",
        "first-project": "Login and Register CLI",
        "enigma": "My Enigma Machine",
        "resume-website": "How Incredibly Meta"
    }

    getCurretProject(): string {
        var url: string[] = this.router.url.split('/');
        return this.urlToTitle[`${url[url.length - 1]}`];
    }
}
