import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { of } from 'rxjs';

@Component({
    selector: 'app-project-selector',
    templateUrl: './project-selector.component.html',
    styleUrls: ['../projects.component.css', './project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {
    @Input() keywordQueryIn: string = '';
    @Input() tagQueryIn: string = '';

    projects: Array<Object> = [
        {
            title: "We Go Services",
            // thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
            thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
            tags: [
                "python",
                "html5",
                "javascript",
                "ngnix",
                "docker",
                "python",
                "web-app",
                "swei",
                "multi-cloud-solution",
            ],
            desc: "In the advent of autonomous vehicles, we aim to take advantage of the growing market of Transportation as a Service with a scalable multi-service Web Application to help fulfil everyday needs.",
            router: "wego-services",
            alt: "",
        },
        {
            title: "Components-Algorithms Bridge Assignment",
            thumbnail: "/kart-test.jpg", // https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg
            tags: [
                "java",
                "components",
                "algorithms",
                "data-structures",
            ],
            desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed for Algorithm and Data Structures.",
            router: "comp-to-algo",
            alt: "",
        },
        {
            title: "Login and Register",
            thumbnail: "/first-project.jpg", // https://naibuzz.com/wp-content/uploads/2017/09/StartOfANewJourney.jpg
            tags: [
                "python",
                "cli",
                "first",
            ],
            desc: "The very first CS project I ever did in university. A simple command line login and register program. How far we've come!",
            router: "first-project",
            alt: "",
        },
        {
            title: "Enigma Machine",
            thumbnail: "/enigma.jpg", // https://content.presspage.com/uploads/1369/enigmamachine-701206.jpg?10000
            tags: [
                "python",
                "cli",
                "enigma",
            ],
            desc: "The inner machinations of my mind are an enigma",
            router: "enigma",
            alt: "",
        },
        {
            title: "To Brock and not to Brock",
            thumbnail: "/senior-project.png", // https://i.ibb.co/7yMB9t6/FireRed.png
            tags: [
                "python",
                "julia",
                "ml",
                "pokemon",
            ],
            desc: "For my research project, my partner and I decided to teach a machine how to beat Brock in Pokemon Fire Red. If Twitch can do it, why can't a bot?",
            router: "senior-project",
            alt: "",
        },
    ]

    public filterProjectByKeyword(title: string, desc: string, tags: string[]) {
        if (this.keywordQueryIn == null) return false;
        if (this.keywordQueryIn.length === 0) return false;
        
        // console.log("#########################");
        // console.log(this.keywordQueryIn);

        var trimKeyword = this.keywordQueryIn.trim();
        var keywordList: string[] = trimKeyword.split(" ");

        var foundKeyword: boolean = false;
        var combinedString: string = title.concat(" ".concat(desc)).concat(" ".concat(tags.join(" ")));
        var combinedStringAsList: string[] = combinedString.split(" ");
        for (let e in keywordList) {
            let word: string = keywordList[e].trim();
            foundKeyword = combinedString.includes(word);
            if (foundKeyword) break;
        }

        // console.log("-----------------");
        // console.log(foundKeyword);
        return !foundKeyword;
    }

    public filterProjectByTag(tags: string[]) {
        if (this.tagQueryIn == null) return false;
        if (this.tagQueryIn.length === 0) return false;

        // console.log("#########################");
        // console.log(this.tagQueryIn);

        var trimTag: string = this.tagQueryIn.trim();
        var tagList: string[] = trimTag.split(" ");

        var check: number = 0;
        for (let e in tagList) {
            let word = tagList[e].trim();
            if (tags.includes(word)) check += 1;
            else check -= 1;
        }

        let foundTag: boolean = check > 0;
        // console.log("-----------------");
        // console.log(foundTag);
        return !foundTag;
    }

    public tagsToClass(tags: string[]) {
        return tags.join(' ');
    }

    public getProjects() {
        return this.projects;
    }

    constructor(public router: Router) {

    }

    ngOnInit(): void {
    }

}
