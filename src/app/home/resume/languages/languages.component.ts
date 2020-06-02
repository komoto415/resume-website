import { Component, OnInit } from '@angular/core';
import { LanguagesService } from './languages.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
    goToProjectsWith: string = "";
    languages: Array<string> = [
        "python", // https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png
        "java", // https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png
        "sql", // https://www.pngwing.com/en/free-png-zoupl
        "html", // https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png
        "css", // https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png
        "javascript", // https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png
        // "julia", // https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Julia_Programming_Language_Logo.svg/1200px-Julia_Programming_Language_Logo.svg.png
        // "cpp", // https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png
        // "c", // https://www.pinclipart.com/picdir/big/396-3965857_c-c-programming-language-logo-clipart.png
    ];

    constructor(public languageService: LanguagesService, public router: Router) { }

    public getImagePath(language: string): string {
        return `/assets/languages/${language}.png`;
    }

    public goToProjectsUsing(language): void {
        this.goToProjectsWith = language;
        console.log(language);
        this.router.navigateByUrl('/projects');
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.languageService.language = this.goToProjectsWith;
    }

}
