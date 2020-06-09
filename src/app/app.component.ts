import { Component, OnInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { ProjectsService } from './projects/projects.service';
import { TechnicalSkillsService } from './home/resume/technical-skills/technical-skills.service';
import { WindowPositionService } from './site-wide-services/window-position.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TechnicalSkillsService, ProjectsService,]
})

export class AppComponent implements OnInit {
    title = 'Jeffrey Kacey   Ng';
    windowScrolled: boolean;

    constructor(private titleService: Title, public windowPosition: WindowPositionService, public router: Router) {
    }

    // scrolling solution found here: https://stackoverflow.com/questions/53188426/angular-7-scroll-event-does-not-fire
    // dyanmic titles solution: https://stackoverflow.com/questions/47900447/how-to-change-page-title-with-routing-in-angular-application
    ngOnInit(): void {
        window.addEventListener('scroll', this.scroll, true); //third parameter
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.router)
            )
            .subscribe(() => {
                const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' - ');
                this.titleService.setTitle(title);
            }
            );
    }

    getTitle(state, parent): string[] {
        const data: string[] = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }

        if (state && parent) {
            data.push(... this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    }

    ngOnDestroy(): void {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (event: any): void => {
        // Here scroll is a variable holding the anonymous function 
        // this allows scroll to be assigned to the event during onInit
        // and removed onDestroy

        // To see what changed:
        this.windowPosition.currentPosition = event.srcElement.scrollTop;
        // console.log(event);
        // console.log('I am scrolling ' + number);

        if (this.windowPosition.currentPosition > 30) {
            this.windowScrolled = true;
        } else {
            this.windowScrolled = false;
        }
        this.windowPosition.windowScrolled = this.windowScrolled
    };

    getCurrentURL(): string {
        return this.router.url;
    }

    checkURL(str: string): boolean {
        return this.router.url.includes(str);
    }

    goToTop(): void {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
