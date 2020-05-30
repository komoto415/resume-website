import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'website';

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    checkURL(str:string) {
        return this.router.url.includes(str);
    }
}
