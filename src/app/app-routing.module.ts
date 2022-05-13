import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-error/page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

import { WegoServicesComponent } from './projects/wego-services/wego-services.component';
import { CompToAlgoComponent } from './projects/comp-to-algo/comp-to-algo.component';
import { FirstProjectComponent } from './projects/first-project/first-project.component';
import { EnigmaComponent } from './projects/enigma/enigma.component';
import { ResumeWebsiteComponent } from './projects/resume-website/resume-website.component';
import { MiniCactpotComponent } from './projects/mini-cactpot/mini-cactpot.component';
import { DominoesComponent } from './projects/dominoes/dominoes.component';
import { Rc4Component } from './projects/rc4/rc4.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            title: "Jeffrey Ng",
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        data: {
            title: "Projects",
        },
        children: [
            {
                path: 'wego-services',
                component: WegoServicesComponent,
                data: {
                    title: "WeGo Services",
                },
            },
            {
                path: 'comp-to-algo',
                component: CompToAlgoComponent,
                data: {
                    title: "Components-Algorithms Bridge Assignment",
                },
            },
            {
                path: 'first-project',
                component: FirstProjectComponent,
                data: {
                    title: "Login and Register CLI",
                },
            },
            {
                path: 'enigma',
                component: EnigmaComponent,
                data: {
                    title: "Python Enigma Machine",
                },
            },
            {
                path: 'resume-website',
                component: ResumeWebsiteComponent,
                data: {
                    title: "Resume and Portfolio Website",
                },
            },
            {
                path: 'mini-cactpot',
                component: MiniCactpotComponent,
                data: {
                    title: "Mini Cactpot Optimiser",
                },
            },
            {
                path: 'dominoes',
                component: DominoesComponent,
                data: {
                    title: "Dominoes",
                },
            },
            {
                path: 'rc4',
                component: Rc4Component,
                data: {
                    title: "RC4 Encryption",
                },
            },
        ],
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            title: "404 - Page not found",
        },
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled',
    }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }