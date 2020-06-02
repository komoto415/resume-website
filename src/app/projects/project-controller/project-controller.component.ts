import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LanguagesService } from 'src/app/home/resume/languages/languages.service';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project-controller',
    templateUrl: './project-controller.component.html',
    styleUrls: ['../projects.component.css', './project-controller.component.css']
})
export class ProjectControllerComponent implements OnInit {
    @Output() tagEmitter = new EventEmitter<string>();
    @Output() titleEmitter = new EventEmitter<string>();

    @Input() filteredTagsIn: string[];

    titleQuery: string;
    tagQuery: string;
    // tagCBDoms;
    // lastInput:string;

    constructor(public projectsService: ProjectsService, public languageService: LanguagesService) {
        this.titleQuery = "";
        this.tagQuery = "";
        // this.filteredTagIn = this.projectsService.getAllTags();
        // this.lastInput = "";
        // this.tagCBDoms = document.getElementsByClassName("tagCB");
    }

    ngOnInit(): void {
        this.tagQuery = this.languageService.language == null ? "" : this.languageService.language;
    }

    isChecked($event): void {
        let label = $event.target;
        // console.log(label.childNodes);
        let input = label.childNodes[0];
        let check = !input.checked;
        let tag: string = label.childNodes[1].data.trim();
        if (check) {
            // console.log("I've been checked! C:")
            // label.classList
            this.updateTags(tag, "checked");
        } else {
            this.updateTags(this.tagQuery.replace(
                this.tagQuery.split("").length == 0 ? tag.concat(" ") : tag, "").trim()
                , "");
        }
        // console.log(check);
        // console.log(tag);

    }

    clearForm($event): void {
        let controllerDiv = $event.target.parentNode.parentNode.parentNode;
        // console.log(controllerDiv);
        let inputNodes = controllerDiv.getElementsByTagName("INPUT");
        // console.log(inputNodes.length);
        for (let i = 0; i < inputNodes.length; i++) {
            let node = inputNodes[i];
            // console.log(node);
            switch (node.type) {
                case "text":
                    node.value = "";
                    break;

                case "radio":
                    node.checked = false;
                    break;

                case "checkbox":
                    console.log(node.checked);
                    if (node.checked) {
                        node.checked = false;
                        let label = node.parentNode;
                        console.log(label);
                        label.classList.remove("active");
                    }
                    break;
            }
        }
        this.updateTitle("");
        this.updateTags("", "");
    }

    updateTitle(value: string): void {
        this.titleQuery = value.toLowerCase().trim();
        // console.log(this.titleQuery);
        this.titleEmitter.emit(this.titleQuery);
    }

    updateTags(value: string, how: string): void {
        let val = value.toLowerCase().trim();
        if (how === "checked") this.tagQuery += `${this.tagQuery.length == 0 ? "" : " "}${val}`
        else this.tagQuery = val;
        // console.log(this.tagQuery);
        this.tagEmitter.emit(this.tagQuery);
    }

    matchCheckBoxWithText(): void {

    }

}
