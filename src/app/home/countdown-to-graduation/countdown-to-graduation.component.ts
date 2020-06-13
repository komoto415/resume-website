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
        const WRAPPER_DIV_MARGIN: number = 20;
        const NUMBER_OF_TIME_BARS: number = 5;
        const ALICEBLUE_HEX: string = "f7f3ee";
        const END_OF_BAR_OFFSET: number = 6; // about ish the width of 2-3 whitespaces @ 100% zoom
        const TIME_BAR_ROUNDED_RECTANGLE_VALUES: number[] = [0, 10, 10, 0]; // top-left, top-right, bottom-right, bottom-left

        let counterDiv: HTMLElement = window.document.getElementById("counter");
        let divWidth: number = counterDiv.clientWidth;
        let canvasHeight: number = window.innerHeight / 2;
        let maxBarWidth: number = (divWidth * 1) - 2 * WRAPPER_DIV_MARGIN;

        let rowHeight: number = canvasHeight / (NUMBER_OF_TIME_BARS * 2);
        let BAR_CONTAINER_MARGIN: number = rowHeight * .2;

        p.setup = (): void => {
            p.createCanvas(divWidth, canvasHeight - 2 * BAR_CONTAINER_MARGIN);
        };

        setInterval((): void => {
            if (p != null) {
                p.clear();
            }
            let grad: moment.Moment = moment("20210508");
            let now: moment.Moment = moment();

            let ss: number = grad.diff(now, "seconds") % 60;
            let mm: number = grad.diff(now, "minutes") % 60;
            let hh: number = grad.diff(now, "hours") % 24;
            let DD: number = grad.diff(now, "days") % 7;
            let WW: number = grad.diff(now, "weeks");

            let isOrPastGrad: boolean = ss <= 0 && mm <= 0 && hh <= 0 && DD <= 0 && WW <= 0;
            if (isOrPastGrad) {
                // I'll do something special at some points
            } else {
                p.strokeWeight(0);
                p.textFont("Balsamiq Sans");
                p.textSize(rowHeight - 20);
                p.textAlign(p.RIGHT, p.CENTER)
                let barNetaArr: BarMeta[] = [
                    new BarMeta(WW, 52, maxBarWidth / 52, "#0c9df3", "W"),  // Weeks
                    new BarMeta(DD, 7, maxBarWidth / 7, "#ec1390", "D"),    // Days
                    new BarMeta(hh, 24, maxBarWidth / 24, "#37c87f", "H"),  // Hours
                    new BarMeta(mm, 60, maxBarWidth / 60, "#e68519", "M"),  // Minutes
                    new BarMeta(ss, 60, maxBarWidth / 60, "#9b15ea", "S"),  // Seconds
                ]

                barNetaArr.forEach((bar, index, _) => {
                    let percentage: number = bar.timeValue / bar.unitDivisor;
                    let width = Math.floor(maxBarWidth * percentage);

                    const NUBS = bar.widthPerUnit * 0.75;
                    const TIME_BAR_MID_LINE: number = rowHeight * 0.5;

                    let yPosition: number = index * 2 * rowHeight + BAR_CONTAINER_MARGIN;
                    let timeText: string = bar.desc + " " + bar.unit;
                    let textWidth: number = p.textWidth(timeText);
                    let textUnitWidth: number = textWidth / timeText.length;
                    let textXPosition: number = Math.max(textUnitWidth * 4, width - END_OF_BAR_OFFSET) + WRAPPER_DIV_MARGIN;

                    // the 'holsters' of the bars
                    p.fill(p.color("#1d1d33"));
                    p.rect(0, yPosition - BAR_CONTAINER_MARGIN,
                        WRAPPER_DIV_MARGIN + NUBS, rowHeight + BAR_CONTAINER_MARGIN * 2,
                        ...TIME_BAR_ROUNDED_RECTANGLE_VALUES);

                    // 'cut out' of the bar holsters
                    p.strokeWeight(0);
                    p.fill(p.color("#2c2c4e"))
                    p.rect(WRAPPER_DIV_MARGIN, yPosition, NUBS, rowHeight);

                    // The actual bar of the time
                    p.fill(p.color(bar.barColour));
                    p.rect(WRAPPER_DIV_MARGIN, yPosition, width, rowHeight, ...TIME_BAR_ROUNDED_RECTANGLE_VALUES);

                    // Text of the numeric time
                    p.fill(p.color(ALICEBLUE_HEX));
                    p.text(bar.desc, textXPosition, yPosition + TIME_BAR_MID_LINE);
                })
            }
        }, 1000);
    }
}
