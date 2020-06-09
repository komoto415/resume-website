import { TagType } from './../tags';
import { PageMeta, PageScript } from './pageData';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-wego-services',
    templateUrl: './wego-services.component.html',
    styleUrls: ['../projects.component.css', './wego-services.component.css']
})
export class WegoServicesComponent implements OnInit {
    readonly COMMON_SERVICES: string = "common-services";
    readonly DEMAND_FRONT_END: string = "demand-front-end";
    readonly SUPPLY_FRONT_END: string = "supply-front-end";
    siteWideScripts: PageScript[] = [
        {
            name: "redirect.js",
            cloud: this.COMMON_SERVICES,
            desc: "Description about redirect",
        },
        {
            name: "checksession.js",
            cloud: this.COMMON_SERVICES,
            desc: "Description about session checking",
        },
        {
            name: "setuser.js",
            cloud: this.COMMON_SERVICES,
            desc: "Description about starting a session",
        },
    ]

    staticPages: PageMeta[][] = [
        [
            {
                penId: "eYJNoEe",
                pageTitle: "Landing Page",
                imgSrc: "landing",
                scripts: [
                    {
                        name: "landingsession.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                    {
                        name: "anchorscroll.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                ],
            },
        ],
        [
            {
                penId: "KKVpYeq",
                pageTitle: "Login",
                imgSrc: "login",
                scripts: [
                    {
                        name: "login.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                    {
                        name: "hideshowpassword.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                    {
                        name: "datetimemethods.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                ],
            },
            {
                penId: "JjGdVBw",
                pageTitle: "Registration",
                imgSrc: "register",
                scripts: [
                    {
                        name: "register.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                    {
                        name: "hideshowpassword.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                    {
                        name: "datetimemethods.js",
                        cloud: this.COMMON_SERVICES,
                        desc: "",
                    },
                ],
            },
        ],
        [
            {
                penId: "ExPjJee",
                pageTitle: "Customer Dashboard ",
                imgSrc: "customer-dashboard",
                scripts: [],
            },

            {
                penId: "",
                pageTitle: "Fleet Manager Dashboard",
                imgSrc: "",
                scripts: [],
            },
        ],
        [
            {
                penId: "KKVpYrX",
                pageTitle: "Dry Cleaning Order Page",
                imgSrc: "dry-cleaning-order",
                scripts: [
                    {
                        name: "onload.js",
                        cloud: this.DEMAND_FRONT_END,
                        desc: "",
                    }
                ],
            },
            {
                penId: "xxZGemm",
                pageTitle: "Order Confirmation Page",
                imgSrc: "order-confirmation",
                scripts: [
                    {
                        name: "getcourierinfo.js",
                        cloud: this.DEMAND_FRONT_END,
                        desc: "",
                    }
                ],
            },
        ],
        [
            {
                penId: "",
                pageTitle: "Signout Confirmation",
                imgSrc: "",
                scripts: [],
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

    getCodePenURL(id:string):string {
        return `https://codepen.io/komoto415/full/${id}`;
    }

    getIdFromPageTitle(pageTitle: string): string {
        return pageTitle.toLowerCase().trim().replace(/\ /g, '-');
    }

}
