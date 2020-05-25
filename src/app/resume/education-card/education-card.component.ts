import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education-card',
    templateUrl: './education-card.component.html',
    styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
    colleges: object = [
        {
            "name": "St. Edwards University",
            "timeline": "2017-2021",
            "shorthand": "steds",
            "degrees": [
                "Bachelors of Science in Computer Science",
            ],
            "gpa": "3.45",
            "minors": [
                "Mathematics",
            ],
            "classes": [
                "Software Engineering I",
                "Component-Based Programming",
                "Database Theory",
            ],
        },
        {
            "name": "Washington University in St. Louis",
            "timeline": "2021-2024",
            "shorthand": "washu",
            "degrees": [
                "Masters in Robotics",
                "Bachelors of Science Electrical Engineering",
            ],
            "gpa": "N/A",
            "minors": [],
            "classes": [],
        },
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
