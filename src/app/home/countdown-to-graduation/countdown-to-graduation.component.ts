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

        let counterDiv = window.document.getElementById("counter");
        let divWidth: number = counterDiv.clientWidth;
        let canvasHeight: number = window.innerHeight / 2;
        let maxBarWidth: number = (divWidth * 1) - 2 * WRAPPER_DIV_MARGIN;

        let heightDiff: number = canvasHeight / (NUMBER_OF_TIME_BARS * 2);
        let BAR_CONTAINER_MARGIN: number = heightDiff * .2;

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
                p.textSize(heightDiff - 20);
                p.textAlign(p.RIGHT, p.CENTER)
                let barDataArr: BarMeta[] = []

                // Weeks
                let WWPer: number = WW / 52;
                let WWWitdh: number = Math.floor(maxBarWidth * WWPer);
                barDataArr.push(new BarMeta(WWPer, WWWitdh, maxBarWidth / 52, "#0c9df3", `${WW}`, "W"))

                // Days
                let DDPer: number = DD / 7;
                let DDWidth: number = Math.floor(maxBarWidth * DDPer);
                barDataArr.push(new BarMeta(DDPer, DDWidth, maxBarWidth / 7, "#ec1390", `${DD}`, "D"));

                // Hours
                let hhPer: number = hh / 24;
                let hhWidth: number = Math.floor(maxBarWidth * hhPer);
                barDataArr.push(new BarMeta(hhPer, hhWidth, maxBarWidth / 24, "#37c87f", `${hh}`, "H"));

                // Minutes
                let mmPer: number = mm / 60;
                let mmWidth: number = Math.floor(maxBarWidth * mmPer);
                barDataArr.push(new BarMeta(mmPer, mmWidth, maxBarWidth / 60, "#e68519", `${mm}`, "M"));

                // Seconds
                let ssPer: number = ss / 60;
                let ssWidth: number = Math.floor(maxBarWidth * ssPer);
                barDataArr.push(new BarMeta(ssPer, ssWidth, maxBarWidth / 60, "#9b15ea", `${ss}`, "S"));

                barDataArr.forEach((barObj, index, _) => {
                    let height: number = index * 2 * heightDiff + BAR_CONTAINER_MARGIN;
                    let timeText: string = barObj.desc + " " + barObj.unit;
                    let textWidth: number = p.textWidth(timeText);
                    let textUnitWidth: number = textWidth / timeText.length;
                    let textXPosition: number = Math.max(textUnitWidth * 4, barObj.width - END_OF_BAR_OFFSET) + WRAPPER_DIV_MARGIN;
                    const NUBS = barObj.widthPerUnit * 0.75;

                    // the 'holsters' of the bars
                    p.fill(p.color("#1d1d33"));
                    p.rect(0, height - BAR_CONTAINER_MARGIN,
                        WRAPPER_DIV_MARGIN + NUBS, heightDiff + BAR_CONTAINER_MARGIN * 2,
                        0, 5, 5, 0);

                    // 'cut out' of the bar holsters
                    p.strokeWeight(0);
                    p.fill(p.color("#2c2c4e"))
                    p.rect(WRAPPER_DIV_MARGIN, height, NUBS, heightDiff);

                    // The actual bar of the time
                    p.fill(p.color(barObj.barColour));
                    p.rect(WRAPPER_DIV_MARGIN, height, barObj.width, heightDiff, 0, 5, 5, 0);

                    // Text of the numeric time
                    p.fill(p.color(ALICEBLUE_HEX));
                    p.text(barObj.desc + " " + barObj.unit, textXPosition, height + heightDiff * 0.5);
                })
            }
        }, 1000);
    }
}
