export class BarMeta {
    timeValue: number;
    unitDivisor:number;
    widthPerUnit: number;
    barColour: string;
    unit: string;
    desc: string;

    constructor(timeValue: number, unitDivisor: number, widthPerUnit: number, barColour: string, unit: string) {
        this.timeValue = timeValue;
        this.unitDivisor = unitDivisor;
        this.widthPerUnit = widthPerUnit;
        this.barColour = barColour;
        this.unit = unit;
        this.desc = `${timeValue} ${unit}`;
    }
}