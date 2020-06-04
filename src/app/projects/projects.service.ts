import { Project } from './project';
import { TagType } from './tags'

export class ProjectsService {
    projects: Project[] = [
        {
            title: "We Go Services",
            // thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
            thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
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
            ],
            desc: "In the advent of autonomous vehicles, we aim to take advantage of the growing market of Transportation as a Service with a scalable multi-service Web Application to help fulfil everyday needs.",
            router: "wego-services",
            alt: "",
        },
        {
            title: "Components-Algorithms Bridge Assignment",
            thumbnail: "/kart-test.jpg", // https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg
            tags: [
                TagType.java,
                TagType.components,
                TagType.algorithms,
                TagType.data_structures,
                TagType.personal,
            ],
            desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed for Algorithm and Data Structures.",
            router: "comp-to-algo",
            alt: "",
        },
        {
            title: "Login and Register",
            thumbnail: "/first-project.jpg", // https://naibuzz.com/wp-content/uploads/2017/09/StartOfANewJourney.jpg
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
        {
            title: "Enigma Machine",
            thumbnail: "/enigma.jpg", // https://content.presspage.com/uploads/1369/enigmamachine-701206.jpg?10000
            tags: [
                TagType.python,
                TagType.cli,
                TagType.personal,
                TagType.enigma,
            ],
            desc: "The inner machinations of my mind are an enigma",
            router: "enigma",
            alt: "",
        },
        {
            title: "Inception Website",
            thumbnail: "/resume-website.PNG", // Just a screen shot c:
            tags: [
                TagType.javascript,
                TagType.html,
                TagType.css,
                TagType.angularjs,
                TagType.digitalocean,
                TagType.ngnix,
            ],
            desc: "My first attempt and building at building an AngularJS app and deployment on a VPS",
            router: "resume-website",
            alt: "",
        },
        // {
        //     title: "To Brock and not to Brock",
        //     thumbnail: "/senior-project.png", // https://i.ibb.co/7yMB9t6/FireRed.png
        //     tags: [
        //         TagType.python,
        //         TagType.julia,
        //         TagType.ml,
        //         TagType.pokemon,
        //     ],
        //     desc: "For my research project, my partner and I decided to teach a machine how to beat Brock in Pokemon Fire Red. If Twitch can do it, why can't a bot?",
        //     router: "senior-project",
        //     alt: "",
        // },
    ]

    getProjects(): Project[] {
        return this.projects;
    }

    getAllUniqueTags(): string[] {
        let tags2D: string[][] = this.projects.map(e => e.tags);
        // console.log(tags2D);
        let tagsAsSet: Set<string> = new Set([].concat.apply([], tags2D))
        return [...tagsAsSet];
    }
}