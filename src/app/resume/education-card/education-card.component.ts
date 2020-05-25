import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education-card',
    templateUrl: './education-card.component.html',
    styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
    colleges = [
        {
            "name": "St. Edwards University",
            "timeline" : "2017-2021",
            "shorthand" : "steds",
            "bachelors" : "in Science",
            "degree" : "Computer Science",
            "gpa": "3.45",
            "minors" : ["Mathematics",],
            "classes": [
                "Software Engineering I",
                "Component-Based Programming",
            ],

        }, 
        {
            "name": "Washington University in St. Louis",
            "timeline" : "2021-2024",
            "shorthand": "washu",
            "bachelors" : "in Science",
            "degree" : "Electrical Engineering",
            "gpa": "N/A",
            "minors" : [],
            "classes": ["N/A"],
        }

    ]
    constructor() { }

    ngOnInit(): void {
    }

}
