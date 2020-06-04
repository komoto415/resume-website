import { Component, OnInit } from '@angular/core';
import { TechnicalSkillsService } from './technical-skills.service';
import { Router } from '@angular/router';
import { TagType } from 'src/app/projects/tags';

@Component({
    selector: 'app-technical-skills',
    templateUrl: './technical-skills.component.html',
    styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
    goToProjectsWith: string = "";
    technicalSkills: TagType[] = [
        /* Langauges */
        TagType.python, // https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png
        TagType.java, // https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png
        TagType.sql, // https://www.pngwing.com/en/free-png-zoupl
        TagType.html, // https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png
        TagType.css, // https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png
        TagType.javascript, // https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png
        // TagType.julia, // https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Julia_Programming_Language_Logo.svg/1200px-Julia_Programming_Language_Logo.svg.png
        // TagType.cpp, // https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png
        // TagType.c, // https://www.pinclipart.com/picdir/big/396-3965857_c-c-programming-language-logo-clipart.png


        /* Technologies */
        TagType.ngnix, // https://favpng.com/png_view/container-nginx-reverse-proxy-computer-software-web-cache-transport-layer-security-png/GJt3Q11s#
        TagType.digitalocean, //http://pluspng.com/png-106044.html
        TagType.docker, //https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png
        TagType.angularjs, //https://favpng.com/png_download/yP04b9Ab
    ];

    constructor(public technicalSkillsService: TechnicalSkillsService, public router: Router) { }

    public getImagePath(technicalSkills: string): string {
        return `/assets/technical-skills/${technicalSkills}.png`;
    }

    public goToProjectsUsing(technicalSkills): void {
        this.goToProjectsWith = technicalSkills;
        console.log(technicalSkills);
        this.router.navigateByUrl('/projects');
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.technicalSkillsService.technicalSkill = this.goToProjectsWith;
    }

}
