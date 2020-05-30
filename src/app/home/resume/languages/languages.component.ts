import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
    languages: Array<string> = [
            "python",
            "java",
            "sql",
            "html",
            "css",
            "js",
            // "julia",
            // "cpp",
            // "c",
        ];

    constructor() { }

    public getImagePath(language: string) {
        return `/assets/languages/${language}.png`;
    }

    ngOnInit(): void {
    }

}
