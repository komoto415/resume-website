import { WindowPositionService } from './site-wide-services/window-position.service';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicalSkillsService } from './home/resume/technical-skills/technical-skills.service';
import { ProjectsService } from './projects/projects.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TechnicalSkillsService, ProjectsService,]
})

export class AppComponent implements OnInit {
    title = 'website';
    windowScrolled: boolean;

    constructor(public windowPosition: WindowPositionService, public router: Router) {
    }

    // scrolling solution found here: https://stackoverflow.com/questions/53188426/angular-7-scroll-event-does-not-fire
    ngOnInit(): void {
        window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    ngOnDestroy() {
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
