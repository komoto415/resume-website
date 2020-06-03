import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project-selector',
    templateUrl: './project-selector.component.html',
    styleUrls: ['../projects.component.css', './project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit, OnChanges {

    @Input() titleQueryIn: string;
    @Input() tagQueryIn: string;

    @Output() currentTagsEmitter = new EventEmitter<string[]>();

    readonly FADE_IN_CLASS: string = "fade-in";
    readonly FADE_OUT_CLASS: string = "fade-out";

    projects: Project[];

    constructor(public projectsService: ProjectsService, public router: Router) {
        this.projects = this.projectsService.getProjects();
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes.tagQueryIn.previousValue);
        console.log(changes.tagQueryIn.currentValue);
        let oldTagQuery = changes.tagQueryIn.previousValue;
        let newTagQuery = changes.tagQueryIn.currentValue;
        this.filterProjects("", newTagQuery)
    }

    filterProjects(title: string, tags: string): void {
        // this.filterProjectByTitle(title);
        this.filterProjectByTag(tags);
    }

    filterProjectByTitle(title: string): void {
        if (title == null) return;
        // if (this.titleQueryIn == null) return false;
        // if (this.titleQueryIn.length === 0) return false;

        // // console.log("#########################");
        // // console.log(this.titleQueryIn);

        // let trimtitle = this.titleQueryIn.trim();
        // trimtitle = trimtitle.replace(/\s+/g, " "); 

        // let foundTitle: boolean = title.toLowerCase().includes(trimtitle);
        // // this.filterTags(title, foundTitle);
    }

    filterProjectByTag(tags: string): void {
        if (tags == null) return;
        console.log(tags.length)
        let tagsToKeep: string[] = [];
        if (tags.length === 0) {
            this.noQuery();
            tagsToKeep = this.projectsService.getAllUniqueTags();
        } else {
            let trimTag = tags.trim();
            trimTag = trimTag.replace(/\s+/g, " ");
    
            let tagList: string[] = trimTag.split(" ");
    
            let cards = document.getElementsByClassName("project-card");
            // console.log(cards);
            for (let div = 0; div < cards.length; div++) {
                let card = cards[div];
                let cardTagsAsString: string = card.getElementsByClassName("tags")[0].textContent;
                // console.log(cardTagsAsString);
                let removeHash = "  #";
    
    
                let cardTagsAsList: string[] = cardTagsAsString.trim().split(removeHash)
                    .map(e => e.replace(/[^a-zA-Z \-]/g, ""));
    
                var hasTags: boolean = tagList.every(e => {
                    return cardTagsAsList.indexOf(e) >= 0
                })
    
                let classList = card.classList;
                let alreadyShowing = classList.contains(this.FADE_IN_CLASS);
                if (hasTags) {
                    if (!alreadyShowing) {
                        classList.remove(this.FADE_OUT_CLASS);
                        classList.add(this.FADE_IN_CLASS);
                    }
                    tagsToKeep = tagsToKeep.concat(cardTagsAsList);
                } else {
                    if (alreadyShowing) {
                        classList.remove(this.FADE_IN_CLASS);
                        classList.add(this.FADE_OUT_CLASS);
                    }
                }
            }
        }
        tagsToKeep = [...new Set(tagsToKeep)];
        this.filterTags(tagsToKeep);
        // let titles = cards.getElementsBy
        // this.filterTags(tags , foundTag);
    }

    noQuery(): void {
        let cards = document.getElementsByClassName("project-card");
        // console.log("no query");
        for (let div = 0; div < cards.length; div++) {
            let card = cards[div];
            let classList = card.classList;
            if (classList.contains(this.FADE_IN_CLASS)) continue;
            if (classList.contains(this.FADE_OUT_CLASS)) classList.remove(this.FADE_OUT_CLASS);
            classList.add(this.FADE_IN_CLASS);
        }
    }

    filterTags(newTags: string[]): void {
        // console.log("aabout to filter tags");
        console.log(newTags);
        setTimeout(() => this.currentTagsEmitter.emit(newTags));
    }
}
