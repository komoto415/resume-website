import { TagType } from 'src/app/projects/tags';
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

    getCurretProject(): string {
        let url: string[] = this.router.url.split('/');
        let route = url[url.length - 1];
        let index: number = 0;
        let foundProject: boolean = false;
        let currentTitle: string = "";
        while (index < this.projectsService.projects.length && !foundProject) {
            let project = this.projectsService.projects[index];
            foundProject = project.router === route;
            if (foundProject) {
                currentTitle = project.title;
            } else {
                index += 1;
            }
        }
        return currentTitle;
    }

    getCurrentProjectTags(): TagType[] {
        let currentProjectTitle: string = this.getCurretProject();
        let index: number = 0;
        let foundProject: boolean = false;
        let currentProjectTags: TagType[] = [];
        while (index < this.projectsService.projects.length && !foundProject) {
            let project = this.projectsService.projects[index];
            foundProject = project.title === currentProjectTitle;
            if (foundProject) {
                currentProjectTags = project.tags;
            } else {
                index += 1;
            }
        }
        return currentProjectTags;
    }
}
