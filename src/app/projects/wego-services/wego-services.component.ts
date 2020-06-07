import { TagType } from './../tags';
import { PageMeta } from './pageData';
import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects.component'

@Component({
    selector: 'app-wego-services',
    templateUrl: './wego-services.component.html',
    styleUrls: ['../projects.component.css', './wego-services.component.css']
})
export class WegoServicesComponent implements OnInit {
    staticPages: PageMeta[][] = [
        [
            {
                penId: "eYJNoEe",
                pageTitle: "Landing Page",
                imgSrc: "landing",
            },
            {
                penId: "KKVpYeq",
                pageTitle: "Login Page",
                imgSrc: "login",
            },
            {
                penId: "JjGdVBw",
                pageTitle: "Register Page",
                imgSrc: "register",
            },
        ],
        [
            {
                penId: "ExPjJee",
                pageTitle: "Customer Dashboard ",
                imgSrc: "customer-dashboard",
            },
            {
                penId: "KKVpYrX",
                pageTitle: "Dry Cleaning Order Page",
                imgSrc: "dry-cleaning-order",
            },
            {
                penId: "xxZGemm",
                pageTitle: "Order Confirmation Page",
                imgSrc: "order-confirmation",
            },
        ],
    ];

    tags: TagType[] = [
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
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
