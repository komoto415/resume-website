import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowPositionService {
    currentPosition:number; 
    windowScrolled: boolean;

    constructor() { }
}
