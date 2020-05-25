import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
    languages: Array<Array<string>> = [
        [
            "python",
            "java",
            "sql",
        ],
        [
            "julia",
            "cpp",
            "c",
        ],
        [
            "html",
            "css",
            "js",
        ],
    ];

    constructor() { }

    public getImagePath(language:string) {
        return `url(/assets/languages/${language}.png)`;
    }

    ngOnInit(): void {
    }

}
