import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import * as moment from 'moment'; // aDD this 1 of 4
import { BarMeta } from './BarData';

@Component({
    selector: 'app-countdown-to-graduation',
    templateUrl: './countdown-to-graduation.component.html',
    styleUrls: ['./countdown-to-graduation.component.css']
})
export class CountdownToGraduationComponent implements OnInit {
    private p5;

    constructor() {
    }

    ngOnInit() {
        this.createCanvas()
    }

    private createCanvas() {
        let counterDiv: HTMLElement = window.document.getElementById("counter");
        if (counterDiv == null) {
            return;
        }
        this.p5 = new p5(this.sketch, counterDiv);
        this.p5.windowResized = () => {
            counterDiv.innerHTML = "";
            this.p5 = new p5(this.sketch, counterDiv);
        }

    }

    private sketch(p: any) {
        const WRAPPER_DIV_MARGIN: number = 50;
        const NUMBER_OF_TIME_BARS: number = 4;
        const FONT_Y_OFFSET: number = 14;
        const FONT_WIDTH: number = 11;
        const ALICEBLUE_HEX: string = "f7f3ee";
        const END_OF_BAR_OFFSET: number = 6; // about ish the width of 2-3 whitespaces

        let counterDiv = window.document.getElementById("counter");
        let divWidth: number = counterDiv.clientWidth;
        let canvasHeight: number = window.innerHeight / 2;
        let maxBarWidth: number = divWidth - 2 * WRAPPER_DIV_MARGIN;

        let heightDiff: number = canvasHeight / (NUMBER_OF_TIME_BARS * 2);
        let BAR_CONTAINER_MARGIN: number = heightDiff * .2;

        p.setup = (): void => {
            p.createCanvas(divWidth, canvasHeight - 2 * BAR_CONTAINER_MARGIN);
        };

        setInterval((): void => {
            p.clear();
            let grad: moment.Moment = moment("20210508");
            let now: moment.Moment = moment();

            let ss: number = grad.diff(now, "seconds") % 60;
            let mm: number = grad.diff(now, "minutes") % 60;
            let hh: number = grad.diff(now, "hours") % 24;
            let DD: number = grad.diff(now, "days") % 365;

            let isOrPastGrad: boolean = ss <= 0 && mm <= 0 && hh <= 0 && DD <= 0;
            if (isOrPastGrad) {
                // I'll do something special at some points
            } else {
                p.strokeWeight(0);
                p.textSize(heightDiff - 20);
                let barDataArr: BarMeta[] = []

                // Days
                let DDPer: number = DD / 365;
                let DDWidth: number = Math.floor(maxBarWidth * DDPer);
                barDataArr.push(new BarMeta(DDPer, DDWidth, maxBarWidth / 365, "#ec1390", `${DD}`, "DD"));

                // Hours
                let hhPer: number = hh / 24;
                let hhWidth: number = Math.floor(maxBarWidth * hhPer);
                barDataArr.push(new BarMeta(hhPer, hhWidth, maxBarWidth / 24, "#37c87f", `${hh}`, "HH"));

                // Minutes
                let mmPer: number = mm / 60;
                let mmWidth: number = Math.floor(maxBarWidth * mmPer);
                barDataArr.push(new BarMeta(mmPer, mmWidth, maxBarWidth / 60, "#e68519", `${mm}`, "MM"));

                // Seconds
                let ssPer: number = ss / 60;
                let ssWidth: number = Math.floor(maxBarWidth * ssPer);
                barDataArr.push(new BarMeta(ssPer, ssWidth, maxBarWidth / 60, "#9b15ea", `${ss}`, "SS"));
                p.textFont("Balsamiq Sans");

                barDataArr.forEach((barObj, index, _) => {
                    let height: number = index * 2 * heightDiff + BAR_CONTAINER_MARGIN;
                    let textLegnth: number = FONT_WIDTH * barObj.desc.length;
                    let textXPosition: number = Math.max(END_OF_BAR_OFFSET * 2, barObj.width - textLegnth - END_OF_BAR_OFFSET) + WRAPPER_DIV_MARGIN;

                    // the 'holsters' of the bars
                    p.fill(p.color("#1d1d33"));
                    p.rect(0, height - BAR_CONTAINER_MARGIN,
                        WRAPPER_DIV_MARGIN + barObj.widthPerUnit * 2, heightDiff + BAR_CONTAINER_MARGIN * 2,
                        0, 5, 5, 0);

                    // 'cut out' of the bar holsters
                    p.strokeWeight(0);
                    p.fill(p.color("#2c2c4e"))
                    p.rect(WRAPPER_DIV_MARGIN, height, barObj.widthPerUnit * 2, heightDiff);

                    // The actual bar of the time
                    p.fill(p.color(barObj.barColour));
                    p.rect(WRAPPER_DIV_MARGIN, height, barObj.width, heightDiff, 0, 5, 5, 0);

                    // Time units display
                    p.fill(p.color(ALICEBLUE_HEX));
                    p.text(barObj.unit, END_OF_BAR_OFFSET * 2, height + heightDiff - FONT_Y_OFFSET);

                    // Text of the numeric time
                    p.fill(p.color(ALICEBLUE_HEX));
                    p.text(barObj.desc, textXPosition, height + heightDiff - FONT_Y_OFFSET);
                })
            }
        }, 1000);
    }
}
