import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project-selector',
    templateUrl: './project-selector.component.html',
    styleUrls: ['../projects.component.css', './project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {

    @Input() titleQueryIn: string;
    @Input() tagQueryIn: string;
    
    @Output() tagsEmitter = new EventEmitter<string[]>();

    projects: Array<Project>;
    tags: Set<string>;

    constructor(public projectsService: ProjectsService, public router: Router) {
        this.projects = this.projectsService.getProjects();
        this.tags = new Set();
    }

    ngOnInit(): void {
    }

    filterProjectByTitle(project: Project): boolean {
        if (this.titleQueryIn == null) return false;
        if (this.titleQueryIn.length === 0) return false;
        
        let title = project.title;
        // console.log("#########################");
        // console.log(this.titleQueryIn);

        let trimtitle = this.titleQueryIn.trim();
        trimtitle = trimtitle.replace(/\s+/g, " "); 

        let foundTitle: boolean = title.toLowerCase().includes(trimtitle);
        console.log("title'");
        if (foundTitle) {
            this.filterTags(project.tags);
        }
        return !foundTitle;
    }

    filterProjectByTag(project: Project): boolean {
        if (this.tagQueryIn == null) return false;
        if (this.tagQueryIn.length === 0) return false;

        let tags: string[] = project.tags;
        // console.log("#########################");
        // console.log(this.tagQueryIn);

        let trimTag: string = this.tagQueryIn.trim();
        trimTag = trimTag.replace(/\s+/g, " "); 

        let tagList: string[] = trimTag.split(" ");

        let check: number = 0;
        for (let e in tagList) {
            let word = tagList[e].trim();
            if (tags.includes(word)) check += 1;
            else check -= 1;
        }

        let foundTag: boolean = check > 0;
        if (foundTag) {
            this.filterTags(tags);
        }
        return !foundTag;
    }

    tagsToClass(tags: string[]): string {
        return tags.join(' ');
    }

    filterTags(tags: string[]): void {
        // console.log("need to filter");
        // console.log(tags);
        // console.log(this.tags);
        // tags.forEach(e => this.tags.add(e));
        // console.log(this.tags);
        // console.log([...this.tags]); 
        // this.tagsEmitter.emit([...this.tags]);
    }
}
