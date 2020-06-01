import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-project-controller',
    templateUrl: './project-controller.component.html',
    styleUrls: ['../projects.component.css', './project-controller.component.css']
})
export class ProjectControllerComponent implements OnInit {
    @Output() tagEmitter = new EventEmitter<string>();
    @Output() titleEmitter = new EventEmitter<string>();

    titleQuery:string;
    tagQuery:string;
    
    updateTitle(value:string) {
        this.titleQuery = value.toLowerCase();
        // console.log(this.titleQuery);
        this.titleEmitter.emit(this.titleQuery);
    }

    updateTags(value:string) {
        this.tagQuery = value.toLowerCase();
        // console.log(this.tagQuery);
        this.tagEmitter.emit(this.tagQuery);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
