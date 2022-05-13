import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TechnicalSkillsService } from 'src/app/home/resume/technical-skills/technical-skills.service';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project-controller',
    templateUrl: './project-controller.component.html',
    styleUrls: ['../projects.component.css', './project-controller.component.css']
})
export class ProjectControllerComponent implements OnInit, OnChanges {
    @Output() tagEmitter = new EventEmitter<string>();
    @Output() titleEmitter = new EventEmitter<string>();

    @Input() tagsInView: string[];

    readonly FADE_IN_CLASS: string = "fade-in";
    readonly FADE_OUT_CLASS: string = "fade-out";

    tags: string[];
    titleQuery: string;
    tagQuery: string;

    constructor(public projectsService: ProjectsService, public technicalSkillsService: TechnicalSkillsService) {
        this.tags = this.projectsService.getAllUniqueTags().sort();
        this.tagsInView = this.projectsService.getAllUniqueTags().sort();
        this.tagQuery = "";
        if (this.technicalSkillsService.technicalSkill != null) {
            this.tagQuery = this.technicalSkillsService.technicalSkill;
        }
    }

    ngOnInit(): void {
        // console.log("at init");
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log("at changes");
        let oldTags: string[] = changes.tagsInView.previousValue;
        let newTags: string[] = changes.tagsInView.currentValue;
        let firstTimeHere: boolean = oldTags == null && this.technicalSkillsService.technicalSkill != null;
        if (firstTimeHere) {
            // console.log("need to activate a button");
            let checkBoxContainer = document.getElementById("tagCheckboxes");
            let navigatedBySkillClick: boolean = newTags != null && newTags.length !== this.tags.length;
            if (navigatedBySkillClick) {
                checkBoxContainer.classList.add("show");
            }
            let checkBoxLabels = checkBoxContainer.getElementsByTagName("LABEL");
            // console.log(checkBoxDiv);
            for (let i = 0; i < checkBoxLabels.length; i++) {
                let label = checkBoxLabels[i];
                let tag = label.textContent.trim();
                // console.log(tag);
                let foundTag = tag === this.tagQuery;
                if (foundTag) {
                    // console.log("Found the button");
                    label.classList.add("active");
                    let input = <HTMLInputElement>label.getElementsByTagName("INPUT")[0];
                    // console.log(input.checked);
                    input.checked = true;
                }
            }
            this.updateTags(this.technicalSkillsService.technicalSkill, "");

            // console.log(this.tagQuery);
        }
        let noQuery = newTags == null;
        if (noQuery) return;
        setTimeout(() => {
            // console.log(newTags);
            let hideMe: string[] = this.tags.filter(e => !newTags.includes(e));
            // console.log(hideMe);
            let checkBoxDiv = document.getElementById("tagCheckboxes").getElementsByTagName("LABEL");
            // console.log(checkBoxDiv);
            for (let i = 0; i < checkBoxDiv.length; i++) {
                let label = checkBoxDiv[i];
                let tag: string = label.textContent.trim();
                // console.log(tag);
                let labelClasses = label.classList;
                // console.log(labelClasses)
                let foundTagToHide = hideMe.includes(tag);
                if (foundTagToHide) {
                    labelClasses.remove(this.FADE_IN_CLASS);
                    labelClasses.add(this.FADE_OUT_CLASS);
                } else {
                    labelClasses.remove(this.FADE_OUT_CLASS);
                    labelClasses.add(this.FADE_IN_CLASS);
                }
            }
        }, this.technicalSkillsService.technicalSkill == null ? 500 : 0)
    }

    isChecked($event): void {
        let label = $event.target;
        // console.log(label.childNodes);
        let input = label.childNodes[0];
        // console.log(input.checked);
        let checkboxChecked = !input.checked;
        let tag: string = label.childNodes[1].data.trim();
        if (checkboxChecked) {
            // console.log("I've been checked! C:")
            // label.classList
            this.updateTags(tag, "checked");
        } else {
            // console.log("I've been unchecked! :C")
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
                    // console.log(node.checked);
                    if (node.checked) {
                        node.checked = false;
                        let label = node.parentNode;
                        // console.log(label);
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

    updateTags(value: string, method: string): void {
        let val = value.toLowerCase().trim();
        let updatedByCheckbox = method === "checked";
        if (updatedByCheckbox) {
            this.tagQuery += `${this.tagQuery.length == 0 ? "" : " "}${val}`
        } else {
            this.tagQuery = val;
        }
        // console.log(this.tagQuery);
        this.tagEmitter.emit(this.tagQuery);
        // console.log(this.projectsControllerService.selectedTags);
        // this.projectsControllerService.selectedTags = this.tagQuery;
        // console.log(this.projectsControllerService.selectedTags);
    }
}
