export class BarMeta {
    percentage: number;
    width: number;
    widthPerUnit: number;
    barColour: string;
    desc: string;
    unit: string;

    constructor(percentage: number, width: number, widthPerUnit: number, barColour: string, desc: string, unit: string) {
        this.percentage = percentage;
        this.width = width;
        this.widthPerUnit = widthPerUnit;
        this.barColour = barColour;
        this.desc = desc;
        this.unit = unit;
    }
}