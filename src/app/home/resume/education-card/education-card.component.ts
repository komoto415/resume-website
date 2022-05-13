import { Component, OnInit } from '@angular/core';
import { College } from './colleges';

@Component({
    selector: 'app-education-card',
    templateUrl: './education-card.component.html',
    styleUrls: ['./education-card.component.css'],
})
export class EducationCardComponent implements OnInit {
    colleges: College[] = [
        {
            name: "Hong Kong International School",
            timeline: "Graduated Jun. 2017",
            shorthand: "hkis",
            degrees: [
                "High School Diploma",
            ],
            gpa: "",
            minors: [],
            classes: [],
        },
        {
            name: "St. Edward's University",
            timeline: "Aug. 2017 - May. 2021",
            shorthand: "steds",
            degrees: [
                "Bachelors of Science in Computer Science",
            ],
            gpa: "",
            minors: [
                "Mathematics",
            ],
            classes: [
                // {
                //     name: "Software Engineering I",
                //     ref: "COSC3339",
                // },
                {
                    name: "Component-Based Programming",
                    ref: "COSC2329",
                },
            ],
        },
    ]
    constructor() { }

    simplifyString(className: string) {
        className = className.split(' ').join('-').toLowerCase();
        return `${className}-modal`
    }

    ngOnInit(): void {
    }
}
