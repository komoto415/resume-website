import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }
    
    public isParentUrl() {
        return this.router.url === '/projects'
    }

    urlToTitle: Object = {
        "wego-services": "We Go Services",
        "comp-to-algo": "Components-Algorithms Bridge Assignment",
    }

    public getCurretProject() {
        var url: Array<String> = this.router.url.split('/');
        return this.urlToTitle[`${url[url.length - 1]}`];
    }
}
