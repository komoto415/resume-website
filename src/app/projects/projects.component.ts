import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    query: string;

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    public isParentUrl() {
        return this.router.url === '/projects'
    }

    onKey(value: any) {
        this.query = value.toLowerCase();
    }

    onEnter(value: string) { 
        this.query = value.toLowerCase(); 
    }

    urlToTitle: Object = {
        "wego-services": "We Go Services",
        "comp-to-algo": "Components-Algorithms Bridge Assignment",
        "first-project": "Humble Beginnings",
        "enigma": "My Enigma Machine",
    }

    public getCurretProject() {
        var url: Array<String> = this.router.url.split('/');
        return this.urlToTitle[`${url[url.length - 1]}`];
    }
}
