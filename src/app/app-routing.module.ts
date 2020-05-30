import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-error/page-not-found/page-not-found.component';
import { WegoServicesComponent } from './projects/wego-services/wego-services.component';
import { CompToAlgoComponent } from './projects/comp-to-algo/comp-to-algo.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'wego-services',
                component: WegoServicesComponent,
            },
            {
                path: 'comp-to-algo',
                component: CompToAlgoComponent,
            },
        ]

    },            
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled',
    }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }