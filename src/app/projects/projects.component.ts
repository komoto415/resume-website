import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects = [
        [
            {
                title: "We Go Services",
                thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
                tags: ["python","html5","javascript", "ngnix", "docker", "python", "swei", "agile-development", "multi-cloud-solution",],
                desc: "So many teams crashed and burned",
                link: "https://github.com/sp20-swei-Team22"
            },
        ],
        [
            {
                title: "Components-Algorithms Bridge Assignment",
                thumbnail: "/kart-test.jpg", // https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg
                tags: ["java", "components", "algorithms", "data-structures",],
                desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed for Algorithm and Data Structures",
                link: "https://github.com/komoto415/TestAssignment",
            },
        ],
        [
            // {
            //     title: "To Brock and not to Brock",
            //     thumbnail: "/senior-project.png", // https://i.ibb.co/7yMB9t6/FireRed.png
            //     tags: ["ml", "pokemon", "python", "julia"],
            //     desc: "For my research project, my partner and I decided to teach a machine how to beat Brock in Pokemon Fire Red. If Twitch can do it, why can't a bot?",
            // },
        ],

    ]

    constructor() { }

    ngOnInit(): void {
    }

}
