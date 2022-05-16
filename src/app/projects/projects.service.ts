import { Project } from './project';
import { TagType } from './tags'

export class ProjectsService {
    projects: Project[] = [
        {
            title: "WeGo Services",
            thumbnail: "/wego.jpg", 
            credit: "https://www.newyorker.com/magazine/2013/11/25/auto-correct",
            tags: [
                TagType.python,
                TagType.javascript,
                TagType.sql,
                TagType.html,
                TagType.css,
                TagType.digitalocean,
                TagType.ngnix,
                TagType.docker,
                TagType.web_app,
                TagType.swei,
                TagType.school,
            ],
            desc: "In the advent of autonomous vehicles, we aim to take advantage of the growing market of Transportation as a Service with a scalable multi-service Web Application to help fulfil everyday needs.",
            router: "wego-services",
            alt: "",
        },
        {
            title: "A Coding Litmus Test",
            thumbnail: "/kart-test.jpg", 
            credit: "https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg",
            tags: [
                TagType.java,
                TagType.components,
                TagType.algorithms,
                TagType.data_structures,
                TagType.personal,
            ],
            desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed version for Algorithm and Data Structures.",
            router: "comp-to-algo",
            alt: "",
        },
        {
            title: "Login and Register CLI",
            thumbnail: "/first-project.jpg",
            credit: "https://naibuzz.com/wp-content/uploads/2017/09/StartOfANewJourney.jpg",
            tags: [
                TagType.python,
                TagType.cli,
                TagType.first,
                TagType.cs1,
            ],
            desc: "The very first CS project I ever did in university. A simple command line login and register program. How far we've come!",
            router: "first-project",
            alt: "",
        },
        // {
        //     title: "Python Enigma Machine",
        //     thumbnail: "/enigma.jpg",
            // credit: "https://content.presspage.com/uploads/1369/enigmamachine-701206.jpg?10000",
        //     tags: [
        //         TagType.python,
        //         TagType.cli,
        //         TagType.personal,
        //         TagType.enigma,
        //     ],
        //     desc: "The inner machinations of my mind are an enigma",
        //     router: "enigma",
        //     alt: "",
        // },
        // {
        //     title: "Resume and Portfolio Website",
        //     thumbnail: "/resume-website.jpg", // Just a screen shot c:
        //     credit: "",
        //     tags: [
        //         TagType.javascript,
        //         TagType.html,
        //         TagType.css,
        //         TagType.angularjs,
        //         TagType.digitalocean,
        //         TagType.ngnix,
        //     ],
        //     desc: "My first attempt at building an AngularJS app and deploying it on a VPS.",
        //     router: "resume-website",
        //     alt: "",
        // },
        // {
        //     title: "Final Fantasy 14 Mini Cactpot Solver",
        //     thumbnail: "/mini-cactbot.jpg", 
            // credit: "https://img.finalfantasyxiv.com/lds/h/s/W9Kg2eTjUfbVOr3GwZrSkTI7Nc.jpg",
        //     tags: [
        //         TagType.python,
        //         TagType.cli,
        //         TagType.personal,
        //         TagType.mini_project,
        //         TagType.for_fun,
        //     ],
        //     desc: "The inner machinations of my mind are an enigma.",
        //     router: "mini-cactpot",
        //     alt: "",
        // },
        // {
        //     title: "Dominoes",
        //     thumbnail: "/dominoes.jpg", 
        //     credit: "https://www.gamesver.com/wp-content/uploads/2019/09/Domino.-The-game-of-dominoes.jpg",
        //     tags: [
        //         TagType.java,
        //         TagType.school,
        //         TagType.components,
        //     ],
        //     desc: "Internal vs Cl   ient Representations. Probably my favourite assignment from all of university.",
        //     router: "dominoes",
        //     alt: "",
        // },
        {
            title: "RC4",
            thumbnail: "/rc4.jpg",
            credit: "",
            tags: [
                TagType.python,
                TagType.school,
                TagType.security,
                TagType.cli,
            ],
            desc: "The inner machinations of my mind are an enigma",
            router: "rc4",
            alt: "",
        },
        // {
        //     title: "Tournament",
        //     thumbnail: "",
        //     credit: "",
        //     tags: [
        //         TagType.java,
        //         TagType.school,
        //     ],
        //     desc: "The inner machinations of my mind are an enigma",
        //     router: "tournament",
        //     alt: "",
        // },
    ]

    getProjects(): Project[] {
        return this.projects;
    }

    getAllUniqueTags(): string[] {
        let tags2D: string[][] = this.projects.map(e => e.tags);
        let tagsAsSet: Set<string> = new Set([].concat.apply([], tags2D))
        return [...tagsAsSet];
    }
}