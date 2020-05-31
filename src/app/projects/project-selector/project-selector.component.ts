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
    @Input() test: string = '';

    projects: Array<Object> = [
        {
            title: "We Go Services",
            thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
            tags: ["python", "html5", "javascript", "ngnix", "docker", "python", "web-app", "swei", "multi-cloud-solution",],
            desc: "In the advent of autonomous vehicles, we aim to take advantage of the growing market of Transportation as a Service with a scalable multi-service Web Application to help fulfil everyday needs.",
            router: "wego-services",
        },
        {
            title: "Components-Algorithms Bridge Assignment",
            thumbnail: "/kart-test.jpg", // https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg
            tags: ["java", "components", "algorithms", "data-structures",],
            desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed for Algorithm and Data Structures.",
            router: "comp-to-algo",
        },
        {
            title: "Humble Beginnings",
            thumbnail: "/first-project.jpg", // https://naibuzz.com/wp-content/uploads/2017/09/StartOfANewJourney.jpg
            tags: ["python", "cli", "first",],
            desc: "The very first CS project I ever did in university. A simple command line login and register program. How far we've come!",
            router: "first-project",
        },
        {
            title: "Enigma Machine",
            thumbnail: "/enigma.jpg", // https://content.presspage.com/uploads/1369/enigmamachine-701206.jpg?10000
            tags: ["python", "cli", "enigma",],
            desc: "The inner machinations of my mind are an enigma",
            router: "enigma",
        },
        {
            title: "To Brock and not to Brock",
            thumbnail: "/senior-project.png", // https://i.ibb.co/7yMB9t6/FireRed.png
            tags: ["ml", "pokemon", "python", "julia"],
            desc: "For my research project, my partner and I decided to teach a machine how to beat Brock in Pokemon Fire Red. If Twitch can do it, why can't a bot?",
            router: "",
        },
    ]



    public filterProject(title: string, desc: string, tags: string[]) {
        if (this.test == null) return false;
        if (this.test.length === 0) return false;

        // var combinedStrings:string = title.concat(" ".concat(desc));
        // combinedStrings = combinedStrings.concat(tags.join(" ")).toLowerCase();

        // var queryAsList = this.test.split(" ");

        // let singleWordFound = false;
        // for (let e in queryAsList) {
        //     singleWordFound = combinedStrings.includes(e.toLowerCase());
        //     if (singleWordFound) break;
        // }
        // return !combinedStrings.includes(this.test) && !singleWordFound;
        var noTagFound: boolean = this.filterProjectByTag(tags);
        console.log(noTagFound);
        return noTagFound;
    }

    public filterProjectByTag(tags: string[]) {
        if (this.test == null) return false;
        if (this.test.length === 0) return false;
        console.log("#########################");
        console.log(this.test);

        var queryAsList: string[] = this.test.split(' ');
        var projectTagsAsString: string = tags.join(' ');
        console.log(projectTagsAsString);
        var tagsOnlyQuery: Set<string> = new Set(queryAsList.filter(e => e.startsWith('#')).map(e => e.substring(1)));
        console.log(tagsOnlyQuery);

        var check: number = 0;
        for (var it = tagsOnlyQuery.values(), val = null; val = it.next().value;) {
            if (tags.includes(val)) check += 1;
            else check -= 1;
        }
        let foundTag: boolean = check > 0;
        console.log("-----------------");
        console.log(foundTag);
        return !foundTag;

        // for (let e in tagsOnlyQuery.keys()) {
        //     // var aux:string = tagsOnlyQuery[e].toLowerCase();
        //     var aux:string = e.toLowerCase();
        //     console.log(aux);
        //     // foundTag = projectTagsAsString.includes(aux) || aux === '';
        //     // if (foundTag) break;
        // }
        // console.log(foundTag);
        // return !foundTag;
    }

    // public filterProjectCheckAll(title:string, desc:string, tags:string[]) {
    //     if (this.test == null) return false;
    //     if (this.test.length === 0) return false;

    //     var combinedStrings:string = title.concat(" ".concat(desc));
    //     combinedStrings = combinedStrings.concat(tags.join(" ")).toLowerCase();

    //     return !combinedStrings.includes(this.test);
    // }

    // public filterProjectByTitle(title:string) {
    //     if (this.test == null) return false;
    //     if (this.test.length === 0) return false;

    //     return !title.includes(this.test);
    // }

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
